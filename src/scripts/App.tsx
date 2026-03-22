import Nav from './navigation/Nav.tsx'
import Header from './navigation/Header.tsx'
import Home from './pages/home/Home.tsx'
import Loader from "./Loader.tsx";
import {useState, useEffect} from "react";

const currentYear = new Date().getFullYear()



function App() {

    const [progress, setProgress] = useState(0);
    const [isDone, setIsDone] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const minimumTime = 1500
    const physicalMinimumTime = minimumTime/2;

    console.log(progress)

    useEffect(() => {
        const startTime = Date.now();
        let animationFrame: number;
        let windowLoaded = false;

        const animate = () => {
            const elapsedTime = Date.now() - startTime;
            const physicalProgress = Math.min(Math.floor((elapsedTime / physicalMinimumTime) * 100), 100);

            setProgress(physicalProgress)

            if(physicalProgress < 100){
                animationFrame = requestAnimationFrame(animate)
            } else {
                if(windowLoaded || document.readyState == "complete"){
                    finishLoading()
                }
            }

        };

        function finishLoading(){
            setIsDone(true)
            setTimeout(() => setIsClosing(true), 700);
        }

        const handleLoad = () => {
           windowLoaded = true;

            setProgress((prev) =>{
                if(prev >=100) finishLoading();
                return 100;
            })
        };
        animationFrame = requestAnimationFrame(animate);
        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
        }

        return () =>{
            cancelAnimationFrame(animationFrame);
            window.removeEventListener("load", handleLoad);
        }

    }, [physicalMinimumTime]);

    return <>
        {
            <div className={isClosing? "closing" : ""}>
                <Loader ></Loader>
                <div className="transition-thingy"></div>
            </div>
        }
        {
            isDone && <>
                <Header/>
                <section id="main-section">
                    <Home/>
                </section>
                <Nav/>
                <footer id="footer">All Rights Reserved @ {currentYear} Adris Han </footer>
            </>
        }
    </>
}

export default App;