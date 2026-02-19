import {useEffect, useState} from "react";
import * as React from "react";
import Draggable from "gsap/dist/Draggable";
import gsap from "gsap";
function Skills({showSkills, setShowSkills}: SkillsProps) {
    const [hoverText, setHoverText] = useState<string | null>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [fullscreen, setFullScreen] = useState("");
    useEffect(() => {
        if(showSkills){
            Draggable.create(".window", {
                bounds: "body"
            });
        }
    }, [showSkills]);
    if (!showSkills) {return null}
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
       <div id='skills' onMouseMove={debugMouse} className={"window " + fullscreen}>
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
                            onClick={() => makeFullScreen()}>
                    </button>
               </span>
               <p>skills</p>
           </div>
           <div className="skills-content">
               <div id="skill-graphs">
                   <h2>Web Development</h2>
                   <div className="skill web">
                      <div className="skill-container">
                          <p>3 years</p>
                          <div className="skill-graph" id="html">
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                          </div>
                          <p>5 years</p>
                      </div>
                   </div>
                   <div className="skill web">
                       <div className="skill-container">
                           <p>3 years</p>
                           <div className="skill-graph" id="css">
                               <span></span>
                               <span></span>
                               <span></span>
                               <span></span>
                               <span></span>
                           </div>
                           <p>5 years</p>
                       </div>
                   </div>
                   <div className="skill web">
                       <div className="skill-container">
                           <p>1 year</p>
                           <div className="skill-graph" id="js">
                               <span></span>
                               <span></span>
                               <span></span>
                               <span></span>
                               <span></span>
                           </div>
                           <p>5 years</p>
                       </div>
                   </div>
                   <div className="skill web">
                       <div className="skill-container">
                           <p>months</p>
                           <div className="skill-graph" id="react">
                               <span></span>
                               <span></span>
                               <span></span>
                               <span></span>
                               <span></span>
                           </div>
                           <p>5 years</p>
                       </div>
                   </div>
                   <p className="skill-projects">
                       some projects to checkout - <a href="#">project</a>, <a href="#">project</a>
                   </p>
                   <h2>Web Design</h2>
                   <div className="skill web">
                       <div className="skill-container">
                           <p>3 years</p>
                           <div className="skill-graph" >
                               <span></span>
                               <span></span>
                               <span></span>
                               <span></span>
                               <span></span>
                           </div>
                           <p>5 years</p>
                       </div>
                   </div>

                   <h2>Game Development</h2>
                   <div className="skill ">
                       <div className="skill-container">
                           <p>months</p>
                           <div className="skill-graph" >
                               <span></span>
                               <span></span>
                               <span></span>
                               <span></span>
                               <span></span>
                           </div>
                           <p>5 years</p>
                       </div>
                   </div>
                   <div className="skill">
                       <div className="skill-container">
                           <p>months</p>
                           <div className="skill-graph">
                               <span></span>
                               <span></span>
                               <span></span>
                               <span></span>
                               <span></span>
                           </div>
                           <p>5 years</p>
                       </div>
                   </div>

               </div>
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