//Imports Dependencias
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router';;

//Import Componentes
import Inicio from './componentes/inicio';
import Header from './componentes/header';
import Pie from './componentes/pie';
import ClaseForm from './componentes/claseform';

//Imports CSS
import './css/general.css';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Inicio
  },
  {
    path: "/clase-formulario",
    Component: ClaseForm
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <RouterProvider router={router} />
    <Pie />
  </StrictMode>,
)
