import * as React from "react";
import {useEffect, useState} from "react";
import gsap from "gsap";
import Draggable from "gsap/dist/Draggable";


function Projects({showProjects, setShowProjects}: ProjectsProps) {
    const [hoverText, setHoverText] = useState<string | null>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [fullscreen, setFullScreen] = useState("");
    useEffect(() => {
        if(showProjects){
            Draggable.create(".window", {
                bounds: "body",

            });
        }
    }, [showProjects]);
    function debugMouse(event: React.MouseEvent) {
        //console.log(event);
        setMousePos({x: event.pageX - 10, y: event.pageY + 25})

    }

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

    if (!showProjects) {return null}

    const displayHoverInfo = (info: string) => setHoverText(info);
    const hideHoverInfo = () => setHoverText(null);
    return <>
        <div id="projects" className={"window " + fullscreen} onMouseMove={debugMouse}>
            <div className="header">
               <span>
                    <button id="close" onClick={() => {setShowProjects(false); hideHoverInfo()}}
                            onMouseEnter={() => displayHoverInfo("close projects window")}
                            onMouseLeave={hideHoverInfo}>
                    </button>
                    <button id="nothing" onClick={() => displayHoverInfo("really does nothing")}
                            onMouseEnter={() => displayHoverInfo("does nothing")}
                            onMouseLeave={hideHoverInfo}
                    ></button>
                    <button id="maximize"
                            onMouseEnter={() => displayHoverInfo("maximize projects window")}
                            onMouseLeave={hideHoverInfo}
                            onClick={() => {
                                makeFullScreen();
                            }}>
                    </button>
               </span>
                <p>projects</p>
            </div>

            <div id="projects-content">
                {/*<div id="filter-projects">
                    <button> design</button>
                    <button> code</button>
                </div>*/}
                <div className="project-container">
                    <h2>Resonance <i>2025</i></h2>
                    <a
                        data-project="resonance"
                        href="https://github.com/adris-h/resonance"
                        onMouseEnter={() => displayHoverInfo("open project on github")}
                        onMouseLeave={hideHoverInfo}
                    ></a>
                    <span className="stats">
                        <span>Design</span>
                        <span>Code</span>
                    </span>
                    <p>
                        Fully functional music mixing/equalizer app - made for school as a half year project
                    </p>
                </div>
                <div className="project-container">
                    <h2>Initial Portfolio <i>2025</i></h2>
                    <a
                        data-project="portfolio"
                        href="https://adris-h.github.io/portfolio/"
                        onMouseEnter={() => displayHoverInfo("open project")}
                        onMouseLeave={hideHoverInfo}
                    ></a>
                    <span className="stats">
                        <span>Design</span>
                        <span>Code</span>
                    </span>
                    <p>
                        First take on a portfolio - initially made for a graded school project.
                    </p>
                </div>
                <div className="project-container">
                    <h2>Radiant HQ <i>2024</i></h2>
                    <a
                        data-project="radianthq"
                        href="https://adris-h.github.io/radianthq/"
                        onMouseEnter={() => displayHoverInfo("open project")}
                        onMouseLeave={hideHoverInfo}
                    ></a>
                    <span className="stats">
                        <span>Design</span>
                        <span>Code</span>
                    </span>
                    <p>
                        Website about the game Valorant - made for graded school project
                    </p>
                </div>
            </div>
        </div>
        {hoverText && (
            <div id="hoverText" style={{ left: mousePos.x, top: mousePos.y }}>
                {hoverText}
            </div>
        )}
    </>;


}

interface ProjectsProps {
    showProjects: boolean;
    setShowProjects: (showProjects: boolean) => void;
}

export default Projects;