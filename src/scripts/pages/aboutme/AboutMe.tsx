import {useEffect, useState} from "react";
import * as React from "react";
import Draggable from "gsap/dist/Draggable";
import gsap from "gsap";
function About({showAbout, setShowAbout, zIndex}: SkillsProps) {
    const [hoverText, setHoverText] = useState<string | null>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [fullscreen, setFullScreen] = useState("");
    const isMobile: boolean = window.innerWidth < 768;

    useEffect(() => {
        if(showAbout && !isMobile){
            Draggable.create(".window", {
                bounds: "body"
            });
        }
    }, [showAbout]);
    if (!showAbout) {return null}
    const displayHoverInfo = (info: string) => setHoverText(info);
    const hideHoverInfo = () => setHoverText(null);

    function makeFullScreen() {
        if(isMobile)return;
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

    function calculateBday(date: Date): string {
        const now = new Date();
        let months = (now.getFullYear() - date.getFullYear()) * 12;
        months += now.getMonth() - date.getMonth();

        const years = Math.floor(months / 12);

        return `${years}`;
    }

    return <>
        <div id='about' onMouseMove={debugMouse} className={"window " + fullscreen} style={{zIndex: zIndex}}>
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
                <div className="profile" >
                    <div className="profile-picture" ></div>
                    <div className="profile-bio" >
                        <h2 >Hi, I'm Adris</h2>
                        <p className="occupation">Student developer</p>
                        <p>
                            <span >✧</span> {calculateBday(new Date("2007-08-31"))} years old <br/>
                            <span >⚲</span> Czech republic, Zlínský Kraj
                        </p>
                    </div>
                </div>
                <div className="content">
                    <hr className="divider"/>
                    <div id="languages"><h3>Languages</h3>
                        <ul>
                            <li><b>Czech: </b>Native</li>
                            <li><b>English: </b>Fluent</li>

                        </ul>
                    </div>
                    <hr className="divider"/>
                    <div id="studies">
                        <h3>Education</h3>
                        <ul>
                            <p >2024</p>
                            <li ><a href="https://creativehill.cz/"><span id="chc-logo"></span><span>Secondary School of Film, Multimedia and Computer Technology, s.r.o.</span></a>
                            </li>
                        </ul>
                    </div>
                    <hr className="divider"/>
                    <div id="hobbies">
                        <h3>Besides Coding</h3>
                        <p>
                            Outside of programming I play bass, video games and sometimes I draw.
                        </p>
                        
                    </div>
                    <hr className="divider" />
                    <div id="principles">
                        <h3>What I Stand For</h3>
                        <ul>
                            <li ><h4>heading</h4><p>paragraph</p></li>
                            <li ><h4 >heading</h4><p>paragraph</p></li>
                            <li><h4 >heading</h4><p>paragraph</p></li>
                            <li ><h4 >heading</h4><p>paragraph</p></li>
                        </ul>
                    </div>
                </div>


            </div>

        </div>
        {hoverText && (
            <div id="hoverText" style={{left: mousePos.x, top: mousePos.y}}>
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
    zIndex: number,
}