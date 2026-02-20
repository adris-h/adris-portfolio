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

    return <>
        <nav id="nav">
            <a className="nav-link link" href="#" data-link="about-me" onClick={() => setShowAbout(true)}> about me</a>
            <a className="nav-link link" href="#" data-link="skills" onClick={()=>setShowSkills(true)}> skills</a>
            <a className="nav-link link" href="#" data-link="projects" onClick={() => setShowProjects(true)} ></a>
            <a className="nav-link link" href="#" data-link="friends" onClick={() => setShowFriends(true)}> friends</a>
        </nav>

        <Skills showSkills={showSkills} setShowSkills={setShowSkills} />
        <Projects showProjects={showProjects} setShowProjects={setShowProjects} />
        <About showAbout={showAbout} setShowAbout={setShowAbout} />
        <Friends showFriends={showFriends} setShowFriends={setShowFriends} />

    </>


}




export default Nav;