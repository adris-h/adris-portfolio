import {useState} from "react";
import * as React from "react";
function Skills({showSkills, setShowSkills}: SkillsProps) {
    const [hoverText, setHoverText] = useState<string | null>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    if (!showSkills) {return null}
    const displayHoverInfo = (info: string) => setHoverText(info);
    const hideHoverInfo = () => setHoverText(null);


    return <>
       <div id='skills' onMouseMove={debugMouse}>
           <div className="header">
               <span>
                    <button id="close" onClick={() => {setShowSkills(false); hideHoverInfo()}}
                            onMouseEnter={() => displayHoverInfo("close skills")}
                            onMouseLeave={hideHoverInfo}>
                    </button>
                    <button id="nothing" onClick={() => displayHoverInfo("really does nothing")}
                            onMouseEnter={() => displayHoverInfo("does nothing")}
                            onMouseLeave={hideHoverInfo}
                    ></button>
                    <button id="maximize"
                            onMouseEnter={() => displayHoverInfo("maximize skills")}
                            onMouseLeave={hideHoverInfo}
                    ></button>
               </span>
               <p>skills</p>
           </div>
           <div className="skills-content">
               <h2>Skills</h2>
               <p>
                   My skill set will be displayed here.
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
export default Skills;

interface SkillsProps {
    showSkills: boolean,
    setShowSkills: (showSkills: boolean) => void,
}