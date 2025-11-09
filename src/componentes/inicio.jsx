export default function Inicio(){
    //Este es el cuerpo basico de la funcion a exportar
    //Estas funciones son las que llamamos componentes.
    //Los nombres de estos componentes deben iniciar con una Mayuscula, siguiendo el formato UpperCamelCase
    //Para renderizar el HTML dentro de estas funciones, tenemos que escribirlo como argumento del return
    
    //Primer ejemplo de un objeto, cada propiedad esta separa por comas.
    //Todo el objeto, definido entre llaves, es almacenado en la variable persona
    //const persona = {nombre:'Susana', apellido:'Gimenez', edad:90, colorPelo:'amarillo'};
    //console.log(persona);

    //const taza = {material: "ceramico", tamanio: 400, color: "multicolor" };
    //document.getElementById('tazaMaterial').innerHTML = taza.material;
    //document.getElementById('tazaTamanio').innerHTML = taza.tamanio;
    //document.getElementById('tazaColor').innerHTML = taza.color;
    return(
        <>
            <h1>Pagina de inicio</h1>
            <a href="./clase-formulario">Link a clase formulario</a>
        </>
    )
}