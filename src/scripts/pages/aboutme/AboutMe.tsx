import {useEffect, useState} from "react";
import * as React from "react";
import Draggable from "gsap/dist/Draggable";
import gsap from "gsap";
function About({showAbout, setShowAbout}: SkillsProps) {
    const [hoverText, setHoverText] = useState<string | null>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [fullscreen, setFullScreen] = useState("");
    useEffect(() => {
        if(showAbout){
            Draggable.create(".window", {
                bounds: "body"
            });
        }
    }, [showAbout]);
    if (!showAbout) {return null}
    const displayHoverInfo = (info: string) => setHoverText(info);
    const hideHoverInfo = () => setHoverText(null);

    function makeFullScreen() {
        if (fullscreen != "fullscreen") {
            setFullScreen("fullscreen");
            gsap.to(".window", {
                x: 0,
                y: 0
            });
        } else {
            setFullScreen("");
        }
    }

    return <>
        <div id='about' onMouseMove={debugMouse} className={"window " + fullscreen}>
            <div className="header">
               <span>
                    <button id="close" onClick={() => {setShowAbout(false); hideHoverInfo()}}
                            onMouseEnter={() => displayHoverInfo("close about me")}
                            onMouseLeave={hideHoverInfo}>
                    </button>
                    <button id="nothing" onClick={() => displayHoverInfo("really does nothing")}
                            onMouseEnter={() => displayHoverInfo("does nothing")}
                            onMouseLeave={hideHoverInfo}
                    ></button>
                    <button id="maximize"
                            onMouseEnter={() => displayHoverInfo("maximize about me")}
                            onMouseLeave={hideHoverInfo}
                            onClick={() => makeFullScreen()}>
                    </button>
               </span>
                <p>about me</p>
            </div>
            <div id="about-content">
                <p>
                    I will provide info about me later
                </p>



            </div>

        </div>
        {hoverText && (
            <div id="hoverText" style={{ left: mousePos.x, top: mousePos.y }}>
                {hoverText}
            </div>
        )}
    </>

    function debugMouse(event: React.MouseEvent) {
        setMousePos({x: event.clientX - 10, y: event.clientY + 25})
    }
}
export default About;

interface SkillsProps {
    showAbout: boolean,
    setShowAbout: (showAbout: boolean) => void,
}