import * as React from "react";
import {useState} from "react";

function Projects({showProjects, setShowProjects}: ProjectsProps) {
    const [hoverText, setHoverText] = useState<string | null>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
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
                <h2>Projects</h2>
                <p>Here will be my projects</p>
            </div>
        </div>
        {hoverText && (
            <div id="hoverText" style={{ left: mousePos.x, top: mousePos.y }}>
                {hoverText}
            </div>
        )}
    </>;

    function debugMouse(event: React.MouseEvent) {
        setMousePos({x: event.clientX - 10, y: event.clientY + 25})
    }
}

interface ProjectsProps {
    showProjects: boolean;
    setShowProjects: (showProjects: boolean) => void;
}

export default Projects;