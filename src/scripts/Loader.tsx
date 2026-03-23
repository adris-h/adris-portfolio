function Loader() {
    return <>
        <div id="loader" >
            <div id="loader-window">
                <div id="loader-header">
                    <div id="ellipse-wrapper">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <p id="loading-text">
                        <span>l</span>
                        <span>o</span>
                        <span>a</span>
                        <span>d</span>
                        <span>i</span>
                        <span>n</span>
                        <span>g</span>
                    </p>
                </div>
                <div id="loader-content">
                    <div></div>
                    <div></div>
                </div>
                {/*<div id="loader-content">
                    <p>{progress}%</p>
                </div>*/}
            </div>
        </div>
    </>
}

export default Loader;
/*

interface LoaderProps {
    progress: number
}*/
