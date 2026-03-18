// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './navigation/Nav.tsx'
import Header from './navigation/Header.tsx'
import Home from './pages/home/Home.tsx'

const currentYear = new Date().getFullYear()

function App() {
    return <>
        <Header/>
           <section id="main-section">
               <Home/>
           </section>
        <Nav/>
        <footer id="footer">All Rights Reserved @ {currentYear} Adris Han </footer>
    </>
}

export default App;