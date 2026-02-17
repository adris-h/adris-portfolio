import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
//import PopUp from "./PopUp.tsx";

import './style.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/*<PopUp />*/}

  </StrictMode>,
)

