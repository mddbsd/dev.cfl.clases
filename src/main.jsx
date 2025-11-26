import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router';

import './css/general.css'

import HeaderNav from './componentes/headernav';
import ContenidoDinamico from './componentes/contenido-dinamico';

function ComponentePrincipal(){
    return(
        <h1>Hola Mundo</h1>
    )
}

const rutasObjetos = createBrowserRouter([
    {
        path: "/",
        Component: ComponentePrincipal
    },
    {
        path: "/contenido-dinamico",
        Component: ContenidoDinamico
    }
])

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <HeaderNav />
        <RouterProvider router={rutasObjetos} /> 
    </StrictMode>

)