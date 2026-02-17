/*import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { InertiaPlugin } from 'gsap/InertiaPlugin';
gsap.registerPlugin(Draggable, InertiaPlugin);*/

function Skills({showSkills, setShowSkills}: SkillsProps) {
    if (!showSkills) {return null}
    console.log("clicked skills")
    return <>
       <div id='skills'>
           <span className="header">
               <span>
                    <button id="close" onClick={closeSkills}></button>
                    <button id="maximize"></button>
               </span>
               <p>skills</p>
           </span>
           <div className="skills-content">
               <h2>Skills</h2>
               <p>
                   My skill set will be displayed here.
               </p>

           </div>
       </div>
    </>

    function closeSkills() {
       console.log("closing skills")
        const skillsPopUp = document.getElementById("skills");
        if (skillsPopUp) {
            setShowSkills(false);
        }
    }
}
export default Skills;

/*
Draggable.create("#skills", {
    bounds: "body",
    inertia: true
});*/

interface SkillsProps {
    showSkills: boolean,
    setShowSkills: (showSkills: boolean) => void,
}