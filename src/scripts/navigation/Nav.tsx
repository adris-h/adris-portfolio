import Skills from './../pages/skills/Skills.tsx'
import Projects from './../pages/projects/Projects.tsx'
import About from "../pages/aboutme/AboutMe.tsx";
import Friends from "../pages/friends/Friends.tsx";
import { useState} from "react";

import gsap from 'gsap';
import Draggable from 'gsap/dist/Draggable';
gsap.registerPlugin(Draggable)

function Nav() {
    const [showSkills, setShowSkills] = useState(false)
    const [showProjects, setShowProjects] = useState(false)
    const [showAbout, setShowAbout] = useState(false)
    const [showFriends, setShowFriends] = useState(false)
    const [hoverText, setHoverText] = useState<string | null>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const isMobile: boolean = window.innerWidth < 768;

    const [globalZIndex, setGlobalZIndex] = useState(999);

    console.log(globalZIndex)

    const [activeZIndexes, setActiveZIndexes] = useState({
        about: globalZIndex,
        friends: globalZIndex,
        skills: globalZIndex,
        projects: globalZIndex
    });

    function bringToFront(window: string) {
        setGlobalZIndex(prev => {
            const newZIndex = prev + 1;
            setActiveZIndexes(indexes => ({ ...indexes, [window]: newZIndex }));
            return newZIndex;
        })
    }

    const displayHoverInfo = (info: string) => setHoverText(info);
    const hideHoverInfo = () => setHoverText(null);

    return <>
        <nav id="nav" onMouseMove={debugMouse}>
            <a className="nav-link link" href="#" data-link="about-me" onClick={() => {
                setShowAbout(true)
                bringToFront("about")
            }}
               onMouseEnter={() => displayHoverInfo("about me")}
               onMouseLeave={hideHoverInfo}
            >
                <span className="img"></span>
                <span className="name">about me</span>
            </a>
            <a className="nav-link link" href="#" data-link="skills" onClick={()=> {
                setShowSkills(true)
                bringToFront("skills")
            }}
               onMouseEnter={() => displayHoverInfo("skills")}
               onMouseLeave={hideHoverInfo}
            >
                <span className="img"></span>
                <span className="name">skills</span>
            </a>
            <a className="nav-link link" href="#" data-link="projects" onClick={() => {
                setShowProjects(true)
                bringToFront("projects")
            }}
               onMouseEnter={() => displayHoverInfo("projects")}
               onMouseLeave={hideHoverInfo}
            >
                <span className="img"></span>
                <span className="name">projects</span>
            </a>
            <a className="nav-link link" href="#" data-link="friends" onClick={() => {
                setShowFriends(true)
                bringToFront("friends")
            }}
               onMouseEnter={() => displayHoverInfo("friends")}
               onMouseLeave={hideHoverInfo}
            >
                <span className="img"></span>
                <span className="name">friends</span>
            </a>
        </nav>

        <Skills showSkills={showSkills}
                setShowSkills={setShowSkills}
                zIndex={activeZIndexes.skills}
        />
        <Projects showProjects={showProjects} setShowProjects={setShowProjects}
                  zIndex={activeZIndexes.projects}
        />
        <About showAbout={showAbout} setShowAbout={setShowAbout}
        zIndex={activeZIndexes.about}
        />
        <Friends showFriends={showFriends} setShowFriends={setShowFriends}
                 zIndex={activeZIndexes.friends}/>

        {hoverText && !isMobile && (
            <div id="hoverText" style={{ left: mousePos.x, top: mousePos.y }}>
                {hoverText}
            </div>
        )}

    </>

    function debugMouse(event: React.MouseEvent) {
        setMousePos({x: event.clientX - 10, y: event.clientY + 25})
    }
}




export default Nav;