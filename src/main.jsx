//Imports Dependencias
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router';;

//Import Componentes
import Inicio from './componentes/inicio';
import Header from './componentes/header';
import Pie from './componentes/pie';
//Imports CSS
import './css/general.css';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Inicio
  },
  {
    path: "/formulario",
    element: <h1>Futura pagina de formulario</h1>  
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <RouterProvider router={router} />
    <Pie />
  </StrictMode>,
)
