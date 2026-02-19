import * as React from "react";
import {useEffect, useState} from "react";
import Draggable from "gsap/dist/Draggable";

function Projects({showProjects, setShowProjects}: ProjectsProps) {
    const [hoverText, setHoverText] = useState<string | null>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
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
    if (!showProjects) {return null}

    const displayHoverInfo = (info: string) => setHoverText(info);
    const hideHoverInfo = () => setHoverText(null);

    return <>
        <div id="projects" className="window" onMouseMove={debugMouse}>
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
                            onClick={() => displayHoverInfo("doesnt do anything yet")}>
                    </button>
               </span>
                <p>projects</p>
            </div>
            <div id="projects-content">
                <div className="project-container">
                    <h2>Project Name</h2>
                    <a></a>
                    <span className="stats">
                        <span>Design</span>
                        <span>Code</span>
                    </span>
                    <p>Project info</p>
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