export default function ClaseForm() {
    return(
        <>
            <h2 className="m-4 text-3xl font-bold">Formularios</h2>
            <p className="m-4">Los formularios HTML se utilizan para recolectar entradas del usuario. Esta info recolectada se enviará a un servidor externo para ser procesada, aunque podemos utlizar funciones de JS para modificar contendio del DOM local</p>
            <div>
                <p className="m-4">Ejemplo</p>
                <form className="m-4 border border-black">
                    <label>Nombre:</label><br/>
                    <input className="border border-red-400 rounded" type="text"/><br/>
                    <label>Apellido0</label><br/>
                    <input className="border border-red-400 rounded" type="text"/><br/>
                    <input className="bg-amber-400 hover:bg-blue-300 p-2" type="submit" value="Enviar"/>
                </form>
            </div> 
            <h2 className="m-4 text-3xl font-bold">El elemento &lt;form&gt;</h2>
            <p className="m-4">Este es un elemento contenedor para diferentes tipos de elementos de entrada, tales como: campos de texto, checkboxes, botones radius, botones de envio, etc.</p>
            <h2 className="m-4 text-3xl font-bold">El elemento &lt;input&gt;</h2>
            <p className="m-4">Este elemento es el mas utilizdo en un formulario. Puede mostrase de diversas maneras dependiendo de su atributo type</p>
            <table className="m-4 table-auto-collapse border>tr border-black">
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Descripcion</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>type="text"</td>
                        <td>Muestra un campo para introducir una sola linea de texto</td>
                    </tr>
                    <tr>
                        <td>type="radio"</td>
                        <td>Muestra un boton redondo que se puede utilizar para seleccionar una de varias opcioness</td>
                    </tr>
                    <tr>
                        <td>type="checkbox"</td>
                        <td>Muestra una caja de seleccion, para elegir entre cero o multiples selecciones</td>
                    </tr>
                    <tr>
                        <input name="asd"  type="radio"/><input name="asd" type="radio"/><input name="asd"  type="radio"/>
                    </tr>
                    <tr>
                        <td>type="submit"</td>
                        <td>Muestra un boton para enviar la informacion del formulario</td>
                    </tr>
                    <tr>
                        <td>type="button"</td>
                        <td>muestra un boton clickeable</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}