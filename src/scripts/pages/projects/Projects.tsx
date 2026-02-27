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
                    <p>
                        Fully functional music mixing/equalizer social app where users can import music,
                        save their EQ settings, and share them with others.
                    </p>
                    <a
                        data-project="resonance"
                        target="_blank"
                        href="https://github.com/adris-h/resonance"
                        onMouseEnter={() => displayHoverInfo("open project on github")}
                        onMouseLeave={hideHoverInfo}
                    ></a>
                    <span className="project-technologies">
                        <span>Figma</span>
                        <span>HTML/SCSS</span>
                        <span>Javascript</span>
                        <span>Firebase</span>
                        <span>Web Audio API</span>
                        <span>Waveform.js</span>
                        <span>BeatDetect.js</span>
                    </span>


                </div>
                <div className="project-container">
                    <h2>Initial Portfolio <i>2025</i></h2>
                    <p>
                        First take on a portfolio - made for THE project of the first school year.
                    </p>
                    <a
                        data-project="portfolio"
                        target="_blank"
                        href="https://adris-h.github.io/portfolio/"
                        onMouseEnter={() => displayHoverInfo("open project")}
                        onMouseLeave={hideHoverInfo}
                    ></a>
                    <span className="project-technologies">
                        <span>Figma</span>
                        <span>HTML/SCSS</span>
                        <span>Javascript</span>
                        <span>GSAP</span>
                    </span>


                </div>
                <div className="project-container">
                    <h2>Radiant HQ <i>2024</i></h2>
                    <p>
                        An informational website covering tactical shooter game Valorant, created for a graded school project.
                    </p>
                    <a
                        data-project="radianthq"
                        target="_blank"
                        href="https://adris-h.github.io/radianthq/"
                        onMouseEnter={() => displayHoverInfo("open project")}
                        onMouseLeave={hideHoverInfo}
                    ></a>
                    <span className="project-technologies">
                        <span>Figma</span>
                        <span>HTML/SCSS</span>
                        <span>Javascript</span>
                    </span>


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

/*
                    <p className="project-description">
                        I am really proud of how it turned out, though it was challenge for the social part I used Firebase,
                        which took a huge bit of my time learning it and I'm not even
                        talking about Web Audio API, which made me shed a little.
                    </p>
                    <p className="project-description">
                        I enjoyed working on this project and learned a lot, especially trying out GSAP for the first time.
                    </p>
                    <p className="project-description">
                        While I was happy with the design initially, I can now see stuff that needs improving.
                        Figuring out the layout, typography, and overall look took really long time, but it was worth it.
                    </p>
                    <p className="project-description">
                        During this project I kind of started to learn javascript. I did learn the basic syntax, how JS functions on the site, tho the code is horrendous
                    </p>
 */