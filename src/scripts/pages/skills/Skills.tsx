import {useEffect, useState} from "react";
import * as React from "react";
import Draggable from "gsap/dist/Draggable";
import gsap from "gsap";
import {useLanguage} from "../../LanguageContext.tsx";

function Skills({showSkills, setShowSkills, zIndex}: SkillsProps) {
    const [hoverText, setHoverText] = useState<string | null>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [fullscreen, setFullScreen] = useState("");
    const isMobile: boolean = window.innerWidth < 768;

    const {language, t} = useLanguage();

    // const [currentIndex, setCurrentIndex] = useState(zIndex);


    useEffect(() => {
        if(showSkills  && !isMobile){
            Draggable.create(".window", {
                bounds: "body",
                zIndexBoost: false
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


    const javaDate = new Date("2025-09");
    const scssDate = new Date("2023-10");
    const htmlDate = new Date("2023-10");
    const pyDate = new Date("2025-01");
    const jsDate = new Date("2024-10");
    const figmaDate = new Date("2024-09");
    const unityDate = new Date("2025-09");
    const aseDate = new Date("2025-12");
    const reactDate = new Date("2026-02");


    function calculateTimeDiff(date: Date, forClass = false): string {
        const now = new Date();
        let months = (now.getFullYear() - date.getFullYear()) * 12;
        months += now.getMonth() - date.getMonth();

        if (now.getDate() < date.getDate()) {
            months--;
        }

        const labels = {
            y: forClass ? 'y' : ' year',
            ys: forClass ? 'y' : ' years',
            m: forClass ? 'm' : ' month',
            ms: forClass ? 'm' : ' months'
        };

        const labelsCZ = {
            y: forClass ? 'y' : ' rok',
            ys: forClass ? 'y' : ' roky',
            yss: forClass ? 'y' : ' let',
            m: forClass ? 'm' : ' měsíc',
            ms: forClass ? 'm' : ' měsíce',
            mss: forClass? 'm': 'měsíců'
        }

        if(language == "en"){
            if (months >= 12) {
                const years = Math.floor(months / 12);
                const suffix = years > 1 ? labels.ys : labels.y;
                return forClass ? `${suffix}${years}`:`${years}${suffix}`;
            }
            const suffix = months <= 1 ? labels.m : labels.ms;
            return forClass? `${suffix}`: `${months}${suffix}`;
        } else if (language == "cz"){
            if (months >= 12) {
                const years = Math.floor(months / 12);
                let suffix = labelsCZ.y;

                if(years > 1){
                    suffix = years > 4 ? labelsCZ.yss : labelsCZ.ys;
                }
                return forClass ? `${suffix}${years}`:`${years}${suffix}`;
            }
            let suffix = labelsCZ.m;
            if(months > 1){
                suffix = months > 4? labelsCZ.mss : labelsCZ.ms
            }

            return forClass? `${suffix}`:`${months} ${suffix}`;
        }

        return "";

    }

    return <>
       <div id='skills' onMouseMove={debugMouse} className={"window " + fullscreen} style={{zIndex: zIndex}}>
           <div className="header">
               <span>
                    <button id="close" onClick={() => {setShowSkills(false); hideHoverInfo()}}
                            onMouseEnter={() => displayHoverInfo(t("close") + " " + t("skills"))}
                            onMouseLeave={hideHoverInfo}>
                    </button>
                    <button id="nothing" onClick={() => displayHoverInfo(t("really"))}
                            onMouseEnter={() => displayHoverInfo(t("nothing"))}
                            onMouseLeave={hideHoverInfo}
                    ></button>
                    <button id="maximize"
                            onMouseEnter={() => displayHoverInfo(t("maximize") + " " + t("skills"))}
                            onMouseLeave={hideHoverInfo}
                            onClick={() => makeFullScreen()}>
                    </button>
               </span>
               <p>{t("skills")}</p>
           </div>
           <div className="skills-content">
               <div id="skill-graphs">
                   <h2>Web Development</h2>
                   <div className="skill web">
                        <h3>{t("html")}</h3>
                      <div className="skill-container">
                          <p>{calculateTimeDiff(htmlDate)}</p>
                          <div className="skill-graph" id={calculateTimeDiff(htmlDate, true)}>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                          </div>
                          <p>5 {t("years")}</p>
                      </div>
                   </div>
                   <div className="skill web">
                       <h3>SCSS</h3>
                       <div className="skill-container">
                           <p>{calculateTimeDiff(scssDate)}</p>
                           <div className="skill-graph" id={calculateTimeDiff(scssDate, true)}>
                               <span></span>
                               <span></span>
                               <span></span>
                               <span></span>
                               <span></span>
                           </div>
                           <p>5 {t("years")}</p>
                       </div>
                   </div>
                   <div className="skill web">
                       <h3>Javascript, {t("ts")} Typescript</h3>
                       <div className="skill-container">
                           <p>{calculateTimeDiff(jsDate)}</p>
                           <div className="skill-graph" id={calculateTimeDiff(jsDate, true)}>
                               <span></span>
                               <span></span>
                               <span></span>
                               <span></span>
                               <span></span>
                           </div>
                           <p>5 {t("years")}</p>
                       </div>
                   </div>
                   <div className="skill web">
                       <h3>{t("react")}</h3>
                       <div className="skill-container">
                           <p>{calculateTimeDiff(reactDate)}</p>
                           <div className="skill-graph" id={calculateTimeDiff(reactDate, true)}>
                               <span></span>
                               <span></span>
                               <span></span>
                               <span></span>
                               <span></span>
                           </div>
                           <p>5 {t("years")}</p>
                       </div>
                   </div>
                   {/*<p className="skill-projects">
                       some projects to checkout -
                       <a>Resonance</a>
                       ,<a href="#">in progress</a>
                   </p>*/}

                   <h2>Web Design</h2>
                   <div className="skill web">
                       <h3>figma ♥︎ </h3>
                       <div className="skill-container">
                           <p>{calculateTimeDiff(figmaDate)}</p>
                           <div className="skill-graph" id={calculateTimeDiff(figmaDate, true)} >
                               <span></span>
                               <span></span>
                               <span></span>
                               <span></span>
                               <span></span>
                           </div>
                           <p>5 {t("years")}</p>
                       </div>
                   </div>
                   {/*<p className="skill-projects">
                       some projects to checkout -
                       <a>RadiantHQ </a>,
                       <a> Lucidify</a>
                   </p>*/}

                   <h2>Game Development</h2>
                   <div className="skill ">
                       <h3>Unity C#</h3>
                       <div className="skill-container">
                           <p>{calculateTimeDiff(unityDate)}</p>
                           <div className="skill-graph" id={calculateTimeDiff(unityDate, true)}>
                               <span></span>
                               <span></span>
                               <span></span>
                               <span></span>
                               <span></span>
                           </div>
                           <p>5 {t("years")}</p>
                       </div>
                   </div>

                   <div className="skill">
                       <h3>Aseprite</h3>
                       <div className="skill-container">
                           <p>{calculateTimeDiff(aseDate)}</p>
                           <div className="skill-graph" id={calculateTimeDiff(aseDate, true)}>
                               <span></span>
                               <span></span>
                               <span></span>
                               <span></span>
                               <span></span>
                           </div>
                           <p>5 {t("years")}</p>
                       </div>
                   </div>
                   {/*<p className="skill-projects">
                       some projects to checkout - <a>Guardians Of The Galaxy</a>
                   </p>*/}

                   <h2>{t("other")}</h2>
                   <div className="skill other">
                       <h3>Java</h3>
                       <div className="skill-container">
                           <p>{calculateTimeDiff(javaDate)}</p>
                           <div className="skill-graph" id={calculateTimeDiff(javaDate, true)}>
                               <span></span>
                               <span></span>
                               <span></span>
                               <span></span>
                               <span></span>
                           </div>
                           <p>5 {t("years")}</p>
                       </div>
                   </div>
                   <div className="skill other">
                       <h3>Python</h3>
                       <div className="skill-container">
                           <p>{calculateTimeDiff(pyDate)}</p>
                           <div className="skill-graph" id={calculateTimeDiff(pyDate, true)}>
                               <span></span>
                               <span></span>
                               <span></span>
                               <span></span>
                               <span></span>
                           </div>
                           <p>5 {t("years")}</p>
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
    zIndex: number;
}