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

    const displayHoverInfo = (info: string) => setHoverText(info);
    const hideHoverInfo = () => setHoverText(null);

    return <>
        <nav id="nav" onMouseMove={debugMouse}>
            <a className="nav-link link" href="#" data-link="about-me" onClick={() => setShowAbout(true)}
               onMouseEnter={() => displayHoverInfo("about me")}
               onMouseLeave={hideHoverInfo}
            >
                <span className="img"></span>
                <span className="name">about me</span>
            </a>
            <a className="nav-link link" href="#" data-link="skills" onClick={()=>setShowSkills(true)}
               onMouseEnter={() => displayHoverInfo("skills")}
               onMouseLeave={hideHoverInfo}
            >
                <span className="img"></span>
                <span className="name">skills</span>
            </a>
            <a className="nav-link link" href="#" data-link="projects" onClick={() => setShowProjects(true)}
               onMouseEnter={() => displayHoverInfo("projects")}
               onMouseLeave={hideHoverInfo}
            >
                <span className="img"></span>
                <span className="name">projects</span>
            </a>
            <a className="nav-link link" href="#" data-link="friends" onClick={() => setShowFriends(true)}
               onMouseEnter={() => displayHoverInfo("friends")}
               onMouseLeave={hideHoverInfo}
            >
                <span className="img"></span>
                <span className="name">friends</span>
            </a>
        </nav>

        <Skills showSkills={showSkills} setShowSkills={setShowSkills} />
        <Projects showProjects={showProjects} setShowProjects={setShowProjects} />
        <About showAbout={showAbout} setShowAbout={setShowAbout} />
        <Friends showFriends={showFriends} setShowFriends={setShowFriends} />

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




export default Nav;