// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './navigation/Nav.tsx'
import Header from './navigation/Header.tsx'
import Home from './pages/home/Home.tsx'

// COMPONENTS
// import Skills from "./pages/about/Skills.tsx";
//import Contact from "./pages/contact/Contact.tsx";
/*import Projects from "./pages/projects/Projects.tsx"
import Home from "./pages/home/Home.tsx";*/

function App() {
    return <>
        <Header/>
           <section id="main-section">
               <Home/>
           </section>
        <Nav/>
        </>
}



export default App;