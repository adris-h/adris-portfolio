// import {useState} from "react";

function Header() {
    /*
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);*/

    /*function langChange(e: React.MouseEvent<HTMLAnchorElement>) {
        const target = e.target as HTMLAnchorElement;
        const anchors = document.querySelectorAll("#language-holder a");
        anchors.forEach((anchor) => {
            anchor.classList.remove("active");
        })
        target.classList.add('active');
        const language = target.dataset.lang;
        console.log(language);
    }*/

    /*function closeMenu() {
        setIsClosing(true);
        setTimeout(() => {
            setIsMenuOpen(false);
            setIsClosing(false);
        }, 500);
    }*/

   /* function toggleMenu() {
        if (isMenuOpen) {
            closeMenu();
        } else {
            setIsMenuOpen(true);
        }
    }*/
    let formatted;
    function tickTime(){
        const now = new Date();
        const options = {
            timeZone: 'Europe/Prague',
            day: 'numeric',
            month: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        };

        const options2 = {
            timeZone: 'Europe/Prague',
            weekday: 'short',
        }

        const formatter = new Intl.DateTimeFormat('cs-CZ', options);
        const formatter2 = new Intl.DateTimeFormat('en-UK', options2)
        formatted = formatter2.format(now).replace(',', '') + " " + formatter.format(now).replace(',', '') ;
    }

    tickTime();
    setInterval(() => {
        tickTime();
    }, 60000)

    return <>
        <header id="header">
            <span id="header_left">

               {/* <a className="header-link link" data-link="cz" onClick={toggleMenu}></a>
                <a className="header-link link" data-mode="light"></a>*/}
            </span>
            <a className="header-date" >
                <span> my time</span> {formatted}
            </a>
            {/*{isMenuOpen && (
                <div id="language-holder"   className={isClosing ? 'inactive' : ''}>
                    <a href="#" className="active" onClick={langChange} data-lang="en">english</a>
                    <a href="#" onClick={langChange} data-lang="cs">czech</a>
                </div>
            )}*/}
        </header>
    </>
}

export default Header;