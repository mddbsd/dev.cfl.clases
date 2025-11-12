import { useState } from "react";

//componentes
import FuncionUseState from "./usestate";
import FuncionUseEffect from "./useeffect";

export default function Hooks(){
    const [nombre, setNombre] = useState("Maxi");
    return(
        <div className="contenido" >
            <h1>React Hooks</h1>
            <p>Los ganchos (Hooks) permiten a los componentes funcionales acceder al estado y otras propiedades sin la utilizacion de clases.<br/>Proveen una API mas directa a conceptos de react como props, states, context, entre otros</p>
            <p>Son en definitiva funciones que permiten "enganchar a" propieddes de React desde componentes funcionales"</p>
            <h2>Ejemplo:</h2>
            <div className="p-6">
                <p>Hola, mi nombre es: {nombre}</p>
                <button type="button" onClick={() => setNombre("Carlos")}>Cambiar nombre</button>
            </div>
            <p>Se deben importar los Hooks desde react</p>
            <h2>Reglas de Hooks</h2>
            <p>Hay 3 reglas para los hooks:
                <ul>
                    <li>Solo pueden ser llamados dentro de Componentes Funcionales</li>
                    <li>Solo pueden ser llamados en el nivel superior de un componente</li>
                    <li>No pueden ser condicionales</li>
                </ul>
            </p>
            <FuncionUseState />
            <FuncionUseEffect />
        </div>
    )
}