import Skills from './../pages/skills/Skills.tsx'
import {useState} from "react";

function Nav() {
    const [showSkills, setShowSkills] = useState(false)
    return <>
        <nav id="nav">
            <a className="nav-link link" href="#" data-link="home">icon home</a>
            <a className="nav-link link" href="#" data-link="skills" onClick={()=>setShowSkills(true)}>icon skills</a>
            <a className="nav-link link" href="#" data-link="projects" ></a>
        </nav>

        <Skills showSkills={showSkills} setShowSkills={setShowSkills} />
    </>
}

export default Nav;