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
                        <td>type="submit"</td>
                        <td>Muestra un boton para enviar la informacion del formulario</td>
                    </tr>
                    <tr>
                        <td>type="button"</td>
                        <td>muestra un boton clickeable</td>
                    </tr>
                </tbody>
            </table>
            <h2 className="m-4 text-3xl font-bold">El elemento &lt;label&gt;</h2>
            <p>El elemento label define una etiqueta para muchos elementos de formulario. Es muy util para los usuarios con lector de pantalla ya que este sera leido cuendo el usuario enfoca el elemento de entrada.</p>
            <p>Este elemento tambien ayuda a usuarios que tienen dificultad clickeando en regiones muy pequeñas (tales como botones radio o checkboxes) porque cuando el usuario clickea el texto dentro del &lt;label&gt;, activa dichos botones</p>
            <p>Tambien podemos utilizar un atributo llamado for para emparejar un elemento de entrada con la etiqueta, para hacerlo, el id de la entrada debe coincidir con el for del label</p>
            <div>
                <h3 className="m-4 text-2xl font-bold">Ejemplo radio</h3>
                <div className="radios">
                    <form>
                        <input type="radio" id="html" name="leng_fav" value="HTML" />
                        <label for="html">HTML</label><br/>
                        <input type="radio" id="css" name="leng_fav" value="CSS" />
                        <label for="css">CSS</label><br/>
                        <input type="radio" id="javascript" name="leng_fav" value="JavaScript" />
                        <label for="javascript">JavaScript</label>
                    </form>
                    <h3 className="m-4 text-2xl font-bold">Ejemplo checkbox</h3>
                    <form>
                        <input type="checkbox" id="vehiculo1" name="vehiculo1" value="Moto" />
                        <label for="vehiculo1">Tengo una moto</label><br/>
                        <input type="checkbox" id="vehiculo2" name="vehiculo2" value="Auto" />
                        <label for="vehiculo2">Tengo un auto</label><br/>
                        <input type="checkbox" id="vehiculo3" name="vehiculo3" value="Bici" />
                        <label for="vehiculo3">Tengo una bici</label><br/>
                    </form>
                </div>
            </div>
        </>
    )
}