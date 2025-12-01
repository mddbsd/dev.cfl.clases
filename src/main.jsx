import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router';

import './css/general.css'

import HeaderNav from './componentes/headernav';
import ContenidoDinamico from './componentes/contenido-dinamico';
import Snippets from './componentes/snippets';

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
    },
    {
        path: "/snippets",
        Component: Snippets
    }
])

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <HeaderNav />
        <RouterProvider router={rutasObjetos} /> 
    </StrictMode>

)