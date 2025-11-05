export default function Pruebas(){
    return(
        <form className="bg-cyan-50 p-4 flex flex-col md:flex-row">
            <div className="[&>input]:border-1 [&>input]:border-blue-500 [&>input]:bg-white [&>input]:rounded-sm">
                <label for="fnombre">Nombre:</label><br/>
                <input type="text" name="fnombre" id="fnombre" /><br/>
                <label for="fapellido">Apellido:</label><br/>
                <input type="text" name="fapellido" id="fapellido" /><br/>
                <label for="fdni">DNI:</label><br/>
                <input type="text" name="fdni" id="fdni" /><br/>
                <label for="fmail">E-Mail:</label><br/>
                <input type="text" name="fmail" id="fmail" /><br/>
                <label for="ftelefono">Telefono:</label><br/>
                <input type="text" name="ftelefono" id="ftelefono" /><br/>
                {/*<label>El type="date" nos muestra un calendario que varia según el navegador</label>*/}
                <label for="fnac">Fecha de Nacimiento:</label><br/>
                <input type="date" name="fnac" id="fnac" /><br/>
            </div>
            <div className="formradios m-4">
                <p className="font-bold text-sm">Tipo de vehiculo</p>
                <input type="radio" name="fvehiculo" id="fauto" value="Auto" />
                <label for="fvehiculo">Tengo Auto</label><br/>
                <input type="radio" name="fvehiculo" id="fmoto" value="Moto" />
                <label for="fvehiculo">Tengo Moto</label><br/>
                <input type="radio" name="fvehiculo" id="fbici" value="Bici" />
                <label for="fvehiculo">Tengo Bici</label><br/>
                <input type="radio" name="fvehiculo" id="fnote" value="No Tengo" />
                <label for="fvehiculo">No tengo vehiculo</label><br/>
            </div>
            <div className="formcheckbox m-4">
                <p className=" font-bold text-sm">Estudios</p>
                <input type="checkbox" name="festudio1" id="festudio1" value="Primario" />
                <label for="festudio1">Estudio Primario</label><br/>
                <input type="checkbox" name="festudio2" id="festudio2" value="Secundario" />
                <label for="festudio2">Estudio Secundario</label><br/>
                <input type="checkbox" name="festudio3" id="festudio3" value="Terciario" />
                <label for="festudio3">Estudio Terciario 😀</label><br/>
            </div>
        </form>
    )
}