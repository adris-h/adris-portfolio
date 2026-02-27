import {useState} from "react";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    function langChange(e: React.MouseEvent<HTMLAnchorElement>) {
        const target = e.target as HTMLAnchorElement;
        const anchors = document.querySelectorAll("#language-holder a");
        anchors.forEach((anchor) => {
            anchor.classList.remove("active");
        })
        target.classList.add('active');
        const language = target.dataset.lang;
        console.log(language);
    }

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

    return <>
        <header id="header">
            <span id="header_left">
                <a href="/" className="header-link link" >adris</a>
                <a className="header-link link" data-mode="light"></a>
            </span>
            <a className="header-link link" data-link="cz" onClick={toggleMenu}></a>
            {isMenuOpen && (
                <div id="language-holder"   className={isClosing ? 'inactive' : ''}>
                    <a href="#" className="active" onClick={langChange} data-lang="en">english</a>
                    <a href="#" onClick={langChange} data-lang="cs">czech</a>
                </div>
            )}
        </header>
    </>
}

export default Header;