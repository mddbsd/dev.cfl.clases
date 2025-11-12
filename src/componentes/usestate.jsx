import { useState } from "react"

export default function FuncionUseState(){
    const [marca, setMarca] = useState("Ford");
    const [modelo, setModelo] = useState("Mustang");
    const [anio, setAnio] = useState("1964");
    const [color, setColor] = useState("rojo");

    //useState tambien almacena objetos.
    const [persona, setPersona] =useState({
        nombre: "Susana",
        edad: "90",
        apellido: "Gimenez",
        profesion: "Actriz"
    });

    //... es el opreador spread
    const actualizaProfesion = () => {
        setPersona(previousState => {
            return {...previousState, profesion: "Conductora"}
        });
    }
 
    return(
        <div className="contenido [&>p]:m-3 [&>h1,h2]:m-4 [&>h1,h2]:font-bold">
            <h2>Hook useState</h2>
            <p>Este hook se utiliza para mantener un seguimiento del estado de la aplicacion-<br/>Los estados generalmente se refieren a datos o propiedades de la aplicacion que necesitan ser monitoreados</p>
            <p>El primer paso es importarlo desde react; import &#123; useState &#125; from 'react';</p>
            <p>Luego inicializamos nuestro estado invocando a useState en nuestro componente funcional. useState acepta un estado inicial y retorna 2 valores:
                <ul>
                    <li>El estado actual</li>
                    <li>Una funcion que actualiza el estado</li>
                </ul>
            </p>
            <h2>Ejemplo</h2>
            <code>
                import &#123; useState &125; from 'react';<br/>
                function ColorFavorito()&#123;<br/>
                    const [color, setColor] = useState("Azul");
                &#125;
            </code>
            <p>El primer valor, color, es nuestro estado actual, el segundo valor, setColor, es la funcion que se utiliza para actualizar nuestro estado. Estos nombres son variables que pueden llevar el nombre que quieran.</p>
            <p>Por último, establecemos el estado inicial a "Azul" con la llamada a useState()</p>
            <h2>Ejemplo 2:</h2>
            <p>Tengo un auto marca {marca} modelo {modelo} del año {anio} y color {color} </p>
            <h2>Ejemplo con objetos</h2>
            <p>Mi nombre es {persona.nombre} {persona.apellido}, tengo {persona.edad} años de edad. Mi profesion es {persona.profesion}</p>
            <h2>Actualizando objetos</h2>
            <p>Cuando un estado se actualiza, el estado entro es sobreescrito</p>
            <button type="button" onClick={() => setPersona({profesion: "Conductora"})}>Cambia profesion (pero tambien cambia el objeto)</button>
            <p>Como podemos ver, al hacer click en el boton, toda la información se pierde menos el atributo profesion.¿Que tal si quisieramos actualizar la profesion pero manteniendo los demas atributos?</p>
            <p>Para ello, utilizamos el operador spread (propagacion) junto con la funcion previousState</p>
            <p>Mi nombre es {persona.nombre} {persona.apellido}, tengo {persona.edad} años de edad. Mi profesion es {persona.profesion}</p>
            <button type="button" onClick={actualizaProfesion}>Actualiza profesion</button>
            <p>Ya que necesitamos el valor actual del estado, pasamos una funcion a nuestra funcion setPersona, que recibe el etado anterior (previousState es el nombre de la variable, pordia llamarse de cualquier manera.). Entonces retornamos un objeto, propagando el estado anterior y sobreescribiendo solo la profesion.</p>

        </div>
    )
}