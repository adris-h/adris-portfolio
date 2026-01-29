import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './navigation/Nav.tsx'
import Header from './navigation/Header.tsx'

// COMPONENTS
import Skills from "./pages/about/Skills.tsx";
//import Contact from "./pages/contact/Contact.tsx";
import Projects from "./pages/projects/Projects.tsx"
import Home from "./pages/home/Home.tsx";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <section id="main-section">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/projects" element={<Projects />} />
                    {/*<Route path="/contact" element={<Contact />} />*/}
                </Routes>
            </section>
            <Nav/>
        </BrowserRouter>
    )
}

export default App;