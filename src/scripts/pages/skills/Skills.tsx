/*import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { InertiaPlugin } from 'gsap/InertiaPlugin';
gsap.registerPlugin(Draggable, InertiaPlugin);*/

function Skills({showSkills, setShowSkills}: SkillsProps) {
    if (!showSkills) {return null}
    console.log("clicked skills")
    return <>
       <div id='skills'>
           <button onClick={closeSkills}>close</button>
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