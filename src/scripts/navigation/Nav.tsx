import Skills from './../pages/skills/Skills.tsx'
import Projects from './../pages/projects/Projects.tsx'
import {useEffect, useState} from "react";

import gsap from 'gsap';
import Draggable from 'gsap/dist/Draggable';
gsap.registerPlugin(Draggable)

function Nav() {
    const [showSkills, setShowSkills] = useState(false)
    const [showProjects, setShowProjects] = useState(false)



    return <>
        <nav id="nav">
            <a className="nav-link link" href="#" data-link="home">icon home</a>
            <a className="nav-link link" href="#" data-link="skills" onClick={()=>setShowSkills(true)}>icon skills</a>
            <a className="nav-link link" href="#" data-link="projects" onClick={() => setShowProjects(true)} ></a>
        </nav>

        <Skills showSkills={showSkills} setShowSkills={setShowSkills} />
        <Projects showProjects={showProjects} setShowProjects={setShowProjects} />

    </>


}




export default Nav;