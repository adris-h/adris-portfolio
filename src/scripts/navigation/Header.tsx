function Header() {
    return <>
        <header id="header">
            <span id="header_left">
                <a href="/" className="header-link link">icon logo</a>
                <a className="header-link link">icon mode</a>
            </span>
            <a className="header-link link" onClick={openMenu}>icon lang</a>
            <div id="language-holder">
                <a href="#" className="active" onClick={(e) => langChange(e)} data-lang="en">english</a>
                <a href="#" onClick={(e) => langChange(e)} data-lang="cs">czech</a>
                <a href="#" onClick={(e) => langChange(e)} data-lang="de">german</a>
            </div>
        </header>


    </>
}

function langChange(e: React.MouseEvent<HTMLAnchorElement>) {
    const target = e.target as HTMLAnchorElement;
    const language = target.dataset.lang;
    console.log(language);
}

function openMenu(){
    console.log("wsg");
    langMenu()
}

function langMenu(){
    console.log("langMenu");
    return <>

    </>
}

export default Header;