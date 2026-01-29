import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import PopUp from "./PopUp.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <PopUp />
  </StrictMode>,
)

