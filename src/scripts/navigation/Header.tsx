import {useState} from "react";
import Resume from "../pages/home/Resume.tsx";
import {useLanguage} from "../LanguageContext.tsx";


function Header() {
    const [showResume, setShowResume] = useState(false);
    let formatted;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const { language, changeLanguage, t } = useLanguage();


    function closeMenu() {
        setIsClosing(true);
        setTimeout(() => {
            setIsMenuOpen(false);
            setIsClosing(false);
        }, 500);
    }

     function toggleMenu() {
         if (isMenuOpen) {
             closeMenu();
         } else {
             setIsMenuOpen(true);
         }
     }

    function openResume() {
        if (showResume) {
            setShowResume(false);
        } else{
            setShowResume(true);
        }
    }

    function tickTime(){
        const now = new Date();
        const options: Intl.DateTimeFormatOptions = {
            timeZone: 'Europe/Prague',
            day: 'numeric',
            month: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            weekday: 'short',
            hour12: false,
        };

      /*  const options2: Intl.DateTimeFormatOptions = {
            timeZone: 'Europe/Prague',

        }*/

        const formatter = language === "en"? new Intl.DateTimeFormat('en-UK', options): new Intl.DateTimeFormat('cs-CZ', options)
        formatted = formatter.format(now).replace(',', '') ;
    }

    tickTime();
    setInterval(() => {
        tickTime();
    }, 60000)

    return <>
        <header id="header">
            <span id="header_left">
                <a className="header-link link" id="resume-link" data-text={t("cv")} onClick={openResume}>{t("cv")}</a>
                <a className="header-link link" data-link={language} onClick={toggleMenu}></a>
               {/* <a className="header-link link" data-mode="light"></a>*/}
            </span>
            <a className="header-date" >
                <span> {t("time")}</span> {formatted}
            </a>
            {isMenuOpen && (
                <div id="language-holder"   className={isClosing ? 'inactive' : ''}>
                    <a href="#" className={language === "en"? "active" : ""} onClick={() => changeLanguage("en")} data-lang="en" data-text={t("lang-en")}>{t("lang-en")}</a>
                    <a href="#" className={language === "cz"? "active" : ""} onClick={() => changeLanguage("cz")} data-lang="cz" data-text={t("lang-cz")}>{t("lang-cz")}</a>
                </div>
            )}
        </header>

        <Resume showResume={showResume} setShowResume={setShowResume}></Resume>
    </>
}

export default Header;