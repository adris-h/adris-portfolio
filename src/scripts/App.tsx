import Nav from './navigation/Nav.tsx'
import Header from './navigation/Header.tsx'

// COMPONENTS
import Skills from "./pages/about/Skills.tsx";
//import Contact from "./pages/contact/Contact.tsx";
import Projects from "./pages/projects/Projects.tsx"
import Home from "./pages/home/Home.tsx";

function App() {
    let Component = Home;
    switch (window.location.pathname) {
        case "/":
            Component = Home;
            break;
        case "/skills":
            Component = Skills;
            break;
        case "/projects":
            Component = Projects
            break;
        /*case "/contact":
            Component = Contact
            break;*/
    }
    return (
        <>
            <Header/>
            <section id="main-section">
                <Component/>
            </section>
            <Nav/>
        </>
    )
}

export default App;