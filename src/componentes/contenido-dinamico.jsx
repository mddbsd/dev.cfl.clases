import listaPersonas from '../json/personas.json'

export default function ContenidoDinamico(){

    return(
        <div>
            <h2>Creacion dinamica</h2>
            <p>Utilizando las funcionalidades de react, podemos generar elementos HTML de manera automatica. Para esto utilizamos 2 cosas, una lista de objetos y la funcion map()</p>
            <h3>JSON</h3>
            <p>Es el acronimo de JavaScript Objet Notation, es un formato que define objetos de JavaScript de manera estandarizada. Esos estan contenidos en su propio archivo con extension .json y se pueden importar directamente a los componentenes de react</p>
            <h3>Tabla Dinamica</h3>
            <p>En este ejemplo, vamos a cargar una tabla con contenido de un archivo .json</p>
            <div>
                <table className='table-auto border border-b-emerald-400 w-2xl [&_th]:border [&_td]:border [&_td]:px-1'>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>email</th>
                            <th>curso</th>
                            <th>nota</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listaPersonas.map((persona, indice) => (
                                <tr key={indice}>
                                    <td>{persona.nombre}</td>
                                    <td>{persona.email}</td>
                                    <td>{persona.curso}</td>
                                    <td>{persona.nota}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}