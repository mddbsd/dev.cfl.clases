export default function Inicio(){
    //Este es el cuerpo basico de la funcion a exportar
    //Estas funciones son las que llamamos componentes.
    //Los nombres de estos componentes deben iniciar con una Mayuscula, siguiendo el formato UpperCamelCase
    //Para renderizar el HTML dentro de estas funciones, tenemos que escribirlo como argumento del return
    
    //Primer ejemplo de un objeto, cada propiedad esta separa por comas.
    //Todo el objeto, definido entre llaves, es almacenado en la variable persona
    const persona = {nombre:'Susana', apellido:'Gimenez', edad:90, colorPelo:'amarillo'};
    console.log(persona);

    const taza = {material: "ceramico", tamanio: 400, color: "multicolor" };
    document.getElementById('tazaMaterial').innerHTML = taza.material;
    document.getElementById('tazaTamanio').innerHTML = taza.tamanio;
    document.getElementById('tazaColor').innerHTML = taza.color;
    return(
        <>
            <h2 className="font-bold text-2xl m-3">Estructuras de datos: Objetos</h2>
            <div className="m-4">
                <p>En JS, los objetos se pueden ver como una colección de propiedades. Con una sintaxis de llave/valor, se inicia un conjunto limitado de propiedades; luego se puede agregar y elimnar propiedades. Los valores de estas propiedades pieden ser de cualquier tipo, incluido otros objetos, lo que permite construir estructuras de datos complejas.<br></br></p>
                <p>Hay 2 tipos de priedades de objeto que tienen ciertos atributos: la propiedad <i>data</i> y la propiedad <i>accesor</i>.</p>
            </div>
            <h3 className=" m-3 font-bold text-1xl">Propiedad Data</h3>
            <p className="m-3"> Asocia una clave con un valor y tiene los siguientes atributos:</p>
            <h3 className=" m-3 font-bold text-1xl">Atributos de una propiedad data</h3>
            <table className="border-collapse border -border-gray-400">
                <thead>
                    <tr>
                        <th className="border">Atributo</th>
                        <th className="border">Tipo</th>
                        <th className="border">Descripcion</th>
                        <th className="border">Valor predeterminado</th> 
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border">[[Value]]</td>
                        <td className="border">Cualquier tipo de JS</td>
                        <td className="border">El valor recuperado por un captador de acceso get a la propiedad</td>
                        <td className="border">undefined</td>
                    </tr>
                    <tr>
                        <td className="border">[[Wrieable]]</td>
                        <td className="border">Bolleano</td>
                        <td className="border">Si es falso, el [[Value]] de la propiedad no se puede cambiar</td>
                        <td className="border">false</td>
                    </tr>
                    <tr>
                        <td className="border">[[Enumerable]]</td>
                        <td className="border">Booleano</td>
                        <td className="border">Si es true, la propiedad se enumerará con bucles.</td>
                        <td className="border">false</td>
                    </tr> 
                    <tr>
                        <td className="border">[[Configurable]]</td>
                        <td className="border">Booleano</td>
                        <td className="border">Si es false, la propiedad no se puede eliminar, no se puede cambiar a una propiedad de acceso descriptor y los atributos que no sean [[Value]] y [[Writeable]]  no se pueden cambiar.</td>
                        <td className="border">false</td>
                    </tr>
                </tbody> 
            </table>
            <div className="ejemplo">
                <h3 className="m-3 font-bold text-1xl">Objeto literal</h3>
                <p>Un objeto literal es una manera concisa de crear un objeto solo con llaves y valores</p>
                <code>&#123;nombre:"Susana", apellido:"Gimenez". edad:90, colorPelo:"amarillo"&#125;</code>
            </div>
            <p id="tazaMaterial"></p>
            <p id="tazaTamanio"></p>
            <p id="tazaColor"></p>
        </>
    )
}