import * as React from "react";
import {useEffect, useState} from "react";
import gsap from "gsap";
import Draggable from "gsap/dist/Draggable";


function Projects({showProjects, setShowProjects, zIndex}: ProjectsProps) {
    const [hoverText, setHoverText] = useState<string | null>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [fullscreen, setFullScreen] = useState("");
    const isMobile: boolean = window.innerWidth < 768;
    // comment
    useEffect(() => {
        if(showProjects && !isMobile){
            Draggable.create(".window", {
                bounds: "body",
            });
        }
    }, [showProjects]);
    function debugMouse(event: React.MouseEvent) {
        setMousePos({x: event.pageX - 10, y: event.pageY + 25})

    }

    function makeFullScreen() {
        if (isMobile) return;
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

    interface Project {
        name: string;
        year: number;
        description: string;
        url: string;
        hoverText: string;
        tech: string[];
    }

    const projects: Record<string, Project> = {
        resonance: {
            name: "Resonance",
            year: 2025,
            description: `Fully functional music mixing/equalizer social app where 
            users can import music save their EQ settings, and share them with others.`,
            url: "https://github.com/adris-h/resonance",
            hoverText: "open project on github",
            tech: ["Figma", "HTML/SCSS", "JavaScript", "Firebase", "Web Audio API", "Waveform.js", "BeatDetect.js"]
        },
        portfolio: {
            name: "Portfolio",
            year: 2025,
            description: `First take on a portfolio - made for THE project of the first school year.`,
            url: "https://github.com/adris-h/portfolio",
            hoverText: "open project",
            tech: ["Figma", "HTML/SCSS", "JavaScript", "GSAP"],
        },
        radianthq:{
            name: "RadiantHQ",
            year: 2025,
            description: `An informational website covering tactical shooter game 
            Valorant, created for a graded school project.`,
            url: "https://github.com/adris-h/radianthq",
            hoverText: "open project",
            tech: ["Figma", "HTML/SCSS", "JavaScript"],
        },
        datingsim:{
            name: "Dating Simulator",
            year: 2025,
            description: `Little fun game for Hackathon made with my friends. Although we didn't place anywhere, we still had loads of fun. We chose joy over monetary victory!!`,
            url: "https://github.com/adris-h/datingSim",
            hoverText: "open project",
            tech: ["HTML/SCSS", "JavaScript"],
        }
    }


    function ProjectTemplate({projectName}: {projectName: string}) {
        const project = projects[projectName];
        return  <>
            <div className="project-container">
                <h2>{project.name}<i>{project.year}</i></h2>
                <p>
                    {project.description}
                </p>
                <a
                    data-project={projectName}
                    target="_blank"
                    href={project.url}
                ></a>
                <span className="project-technologies">
                   {project.tech.map((tech: string) => (
                       <span>{tech}</span>
                   ))}
                </span>
            </div>
        </>
    }


    function displayHoverInfo(info: string){
        setHoverText(info);
    }

    function hideHoverInfo(){
        setHoverText(null);
    }

    return <>
        <div id="projects" className={"window " + fullscreen} onMouseMove={debugMouse} style={{zIndex: zIndex}}>
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
                {Object.keys(projects).map((key) => (
                    <ProjectTemplate projectName={key} />
                ))}
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
    zIndex: number;
}

export default Projects;