import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Inicio from './componentes/inicio'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Inicio />
  </StrictMode>,
)
