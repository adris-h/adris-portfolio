import {useEffect, useState} from "react";
import * as React from "react";
import Draggable from "gsap/dist/Draggable";
import gsap from "gsap";
import {useLanguage} from "../../LanguageContext.tsx";

function About({showAbout, setShowAbout, zIndex}: SkillsProps) {
    const [hoverText, setHoverText] = useState<string | null>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [fullscreen, setFullScreen] = useState("");
    const isMobile: boolean = window.innerWidth < 768;
    const { t } = useLanguage();

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
                            onMouseEnter={() => displayHoverInfo(t("close") + " " + t("about"))}
                            onMouseLeave={hideHoverInfo}>
                    </button>
                    <button id="nothing" onClick={() => displayHoverInfo(t("really"))}
                            onMouseEnter={() => displayHoverInfo(t("nothing"))}
                            onMouseLeave={hideHoverInfo}
                    ></button>
                    <button id="maximize"
                            onMouseEnter={() => displayHoverInfo(t("maximize") + " " + t("about"))}
                            onMouseLeave={hideHoverInfo}
                            onClick={() => makeFullScreen()}>
                    </button>
               </span>
                <p>{t("about")}</p>
            </div>
            <div id="about-content">
                <div className="profile" >
                    <div className="profile-picture" ></div>
                    <div className="profile-bio" >
                        <h2>{t("greeting")}</h2>
                        <p className="occupation">{t(("occupation"))}</p>
                        <p>
                            <span >✧</span> {calculateBday(new Date("2007-08-31"))} {t("age")} <br/>
                            <span >⚲</span> {t("location")}
                        </p>
                    </div>
                </div>
                <div className="content">
                    <hr className="divider"/>
                    <div id="languages"><h3>{t("lang-heading")}</h3>
                        <ul>
                            <li><b>{t("lang-cz")}: </b>{t("lang-native")}</li>
                            <li><b>{t("lang-en")}: </b>{t("lang-fluent")}</li>

                        </ul>
                    </div>
                    <hr className="divider"/>
                    <div id="studies">
                        <h3>{t("edu-h")}</h3>
                        <ul>
                            <p >2024</p>
                            <li ><a href="https://creativehill.cz/"><span id="chc-logo"></span>
                                <span>{t("edu-t")}</span></a>
                            </li>
                        </ul>
                    </div>
                    <hr className="divider"/>
                    <div id="hobbies">
                        <h3>{t("code-h")}</h3>
                        <p>
                            {t("code-p")}
                        </p>
                        
                    </div>
                    <hr className="divider" />
                    {/*<div id="principles">
                        <h3>What I Stand For</h3>
                        <ul>
                            <li ><h4>heading</h4><p>paragraph</p></li>
                            <li ><h4 >heading</h4><p>paragraph</p></li>
                            <li><h4 >heading</h4><p>paragraph</p></li>
                            <li ><h4 >heading</h4><p>paragraph</p></li>
                        </ul>
                    </div>*/}
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