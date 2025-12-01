import { useEffect, useState } from "react"


export default function Snippets(){
    const [color1, setColor1] = useState("bg-blue-300");

    function cambiaRojo(){
        setColor1("bg-red-300");
    }

    const [color2, setColor2] = useState("bg-blue-300");
    let flag = true

    function interruptorColor(){
        if(flag){
            setColor2("bg-red-300");
            flag = false;
        } else {
            setColor2("bg-blue-300");
            flag = true;
        }
    }

    const [color3, setColor3] = useState("blue");
    const [posicion, setPosicion] = useState(0);

    function gestionClick(valorOpcion){
        setOpcion(valorOpcion);
    }

    function BarraDeNavegacion(){
        return(
            <>
                <button onClick={() => gestionClick(1)}>pagina 1</button>
                <button onClick={() => gestionClick(2)}>pagina 2</button>
                <button onClick={() => gestionClick(3)}>pagina 3</button>
                <button onClick={() => gestionClick(4)}>pagina 3</button>
            </>
        )
    }

    function ContenidoNav1(){
        return(
                    <div id="contenidonav1">
                        <h2>Titulo 1</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nisi temporibus saepe iusto dignissimos odit eligendi, quis dolorem atque. Officiis, id perferendis veritatis fugiat vero rerum eligendi voluptatum dignissimos deserunt?</p>
                        <p>Sed sit amet posuere turpis, non tincidunt neque. Integer eget iaculis nulla. Phasellus dui nisl, commodo id consectetur sit amet, fringilla sit amet eros. Sed bibendum vitae eros quis tempor. Integer et mi libero. Curabitur pulvinar, massa quis aliquet laoreet, ipsum ipsum pretium odio, vel consequat felis nulla vel libero. Quisque auctor augue a quam venenatis sollicitudin. Etiam sit amet tortor suscipit, dapibus elit sed, porta elit. Phasellus vulputate aliquam augue quis eleifend. Nulla porttitor fringilla sollicitudin. Donec a mauris volutpat, faucibus nunc a, pretium nibh. Quisque quis porta eros. Sed non feugiat ante. </p>
                    </div>
        )
    }

    function ContenidoNav2(){
        return(
                    <div id="contenidonav2">
                        <h2>Titulo 2</h2>
                        <p>Sed sit amet posuere turpis, non tincidunt neque. Integer eget iaculis nulla. Phasellus dui nisl, commodo id consectetur sit amet, fringilla sit amet eros. Sed bibendum vitae eros quis tempor. Integer et mi libero. Curabitur pulvinar, massa quis aliquet laoreet, ipsum ipsum pretium odio, vel consequat felis nulla vel libero. Quisque auctor augue a quam venenatis sollicitudin. Etiam sit amet tortor suscipit, dapibus elit sed, porta elit. Phasellus vulputate aliquam augue quis eleifend. Nulla porttitor fringilla sollicitudin. Donec a mauris volutpat, faucibus nunc a, pretium nibh. Quisque quis porta eros. Sed non feugiat ante. </p>
                    </div>
        )
    }
    function ContenidoNav3(){
        return(

                    <div id="contenidovan3">
                        <h2>Titulo 3</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti dolorum totam ad magni recusandae magnam quaerat cupiditate sit. Eaque accusantium, quidem dolore ipsa deleniti voluptas! Officiis amet ad voluptas consequuntur!</p>
                    </div>
        )
    }

    function ContenidoNav4(){
        return(

                    <div id="contenidovan4">
                        <h2>Titulo 4</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti dolorum totam ad magni recusandae magnam quaerat cupiditate sit. Eaque accusantium, quidem dolore ipsa deleniti voluptas! Officiis amet ad voluptas consequuntur!</p>
                    </div>
        )
    }

    const [condicion, setCondicion] = useState(true);

    const gestionCondicion = () => {
        condicion ? setCondicion(false) : setCondicion(true);
    }

    const [opcion, setOpcion] = useState(1);

    function menuOpciones(){
        switch(opcion){
            case 1:
                return <ContenidoNav1 />
                break;
            case 2:
                return <ContenidoNav2 />
                break;
            case 3:
                return <ContenidoNav3 />
                break;
            case 4:
                return <ContenidoNav4 />
                break;
            default:
                return <p>nada por aqui</p>
        }   
    }

    return(
        <>
        <div id="contenedorprincipal" >
            <div id="contenido">
                <section id="ejercicio">
                    <h2>Modificando el DOM con JS</h2>
                    <p>Utilizando las hooks useEffect, useRef, useState, podemos modificar diferentes aspectos del DOM, como contendio de algun elemento HTML, o incluso cambiar nombres de clases para lograr diferentes efectos</p>
                    <div id="ejemplo1">
                        <div id="elementoejemplo1" className={"w-30 h-30 " + color1}>
                            1
                        </div>
                        <button onClick={cambiaRojo}>cambiar a rojo</button>
                    </div>
                    <div id="ejemplo2">
                        <div id="elementoejemplo2" className={"w-30 h-30 " + color2}></div>
                        <button onClick={interruptorColor}>intercambia color</button>
                    </div>
                    <div id="ejemplo3">
                        <div id="elementoejemplo3" className={`w-30 h-30`} style={{backgroundColor: color3}}></div>
                        <div id="botonera" className="flex flex-wrap gap-4 m-4">
                            <button className="bg-red-500" type="button" onClick={() => setColor3("red")}>Cambiar a rojo</button>
                            <button className="bg-blue-500" type="button" onClick={() => setColor3("blue")}>Cambiar a azul</button>
                            <button className="bg-green-500" type="button" onClick={() => setColor3("yellow")}>Cambiar a verde</button>
                            <button className="bg-yellow-500" type="button" onClick={() => setColor3("green")}>Cambiar a amarillo</button>
                        </div>
                    </div>
                    <div id="ejemplo4">
                        <div id="elementoejemplo4" className="w-30 h-30 bg-blue-600" style={{transform: `translateX(${posicion}%)`}}></div>
                        <input type="range" min="1" max="1000" defaultValue={posicion} onChange={(e) => setPosicion(e.target.value)}/>
                        <p>valor del rango: {posicion}</p>
                    </div>
                </section>
                <hr/>
                <section id="barranav">
                    <h2>Barra de navegación</h2>
                    <div id="contenedornav" className="flex max-[660px]:flex-col gap-5 justify-center p-4 bg-gray-300 [&>button]:p-5 [&>button]:bg-cyan-400  [&>button]:hover:bg-fuchsia-500 [&>button]:hover:-translate-y-4 [&>button]:transition-transform [&>button]:duration-200">
                       <BarraDeNavegacion /> 
                    </div>
                    {/**
                     * condicion ? <ContenidoNav1 /> : <ContenidoNav2 />
                     */}
                    {menuOpciones()}
 


                </section>
            </div>
        </div>
        </>
    )
}