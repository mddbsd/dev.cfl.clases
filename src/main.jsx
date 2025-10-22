//Imports Dependencias
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//Import Componentes
import Inicio from './componentes/inicio'
import Header from './componentes/header'
//Imports CSS
import './css/general.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Inicio />
  </StrictMode>,
)
