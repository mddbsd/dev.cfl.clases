# Clases de React para el CFL 414

Este repo esta creado en calses, se irá actualizando mientras estas avancen.
El estado inicial de esta App es simplente un archivo con un solo componente.

## Objetivos

- Conocer el framework React
- Aprender el funcionamiento de los componentes
- Configurar Vite
- Manjar el framework CSS Tailwind
- Instalar y utilizar dependencias
- Continuar el aprendizaje de HTML y CSS

## NodeJs
Node es el entorno de ejecucion de JavaScript (algo asi como la JVM de java), se utiliza para ejecutar codigo JavaScript por fuera del navegador, esto permite escribir programas en JS, ejecutarlo en un servidor y enviarle al cliente el sitio renderizado ([server side rendering](#ssr))


>Lo podemos instalar con el archivo ejecutable o descomprimirlo en un directorio y configurar las [Variables de entorno](#variables-de-entorno) del sistema operativo.

### Comandos de creacion

Primero abrimos un bash de git en un directorio de nuestra pc donde queremos guardar nuestros proyectos de vite

![](https://cdn.discordapp.com/attachments/1393826223959838720/1393826275755298826/E0E88F38-C5B1-4593-884D-0534D96E52E2.png?ex=68749560&is=687343e0&hm=9763b46b2f7a3501139dcfc23dcb8e28749f34fff44863e84a4788d0d2aa57a3&)

luego, en la terminal escribimos el comando

```
npm create vite@latest
```

![](https://cdn.discordapp.com/attachments/1393826223959838720/1393829584675410010/31B891A9-0FE1-4221-9676-67A38CA1ED3E.png?ex=68749875&is=687346f5&hm=8785a68f4945772b7f0d6a0dc0a6804bca1838b90deffb26535d71d6de874381&)


Vemos que Vite nos empieza a guiar por el asistente de creación. Lo primero que nos pide es el nombre de la app

![](https://cdn.discordapp.com/attachments/1393826223959838720/1393830534391529533/E2532A52-438E-4116-909B-1C64072D9266.png?ex=68749957&is=687347d7&hm=d3a5864bb14b7599577610b490f00eecc1ffb494b9b3c0d6e51dad75fe124c05&)


[React](#react) es el framework que utilizaremos para crear nuestra interfaz

![](https://cdn.discordapp.com/attachments/1393826223959838720/1393838156503318578/3D7AA60E-5284-4E49-B7A7-8C52F297563A.png?ex=6874a070&is=68734ef0&hm=5514da67d7b3dc57f4efea70b47bc748d81fb4aac688a623870329f9be200cc2&)


[Typescript](#typescript) tiene muchas ventajas contra JavaScript, principalmente la deteccion de errores al momento de codificar

![](https://cdn.discordapp.com/attachments/1393826223959838720/1393843913600667658/A09AD967-0110-4B19-B0D8-A4652A9A0BA5.png?ex=6874a5cd&is=6873544d&hm=83ef879c8ddefa2e7842870dcdc7a02b9f76df23f7ddb1fb02fcee5a3c81c2d3&)


En este punto ya podemos abrir nuestro ide y ubicar la carpeta de nuestra app,
luego ejecutar los comandos en el bash

```bash
cd mi-app/ #se mueve a la carpeta app
npm install/ #instala dependencias 
npm run dev #ejecuta la aplicación
```
---

Cuando se ejecuta npm con el comando run, **nuestro bash se queda corriendo la aplicacion**, si lo cerramos **se apaga la app**

Dejamos el bash minimizado y abrimos otro en la carpeta de la app

![](https://cdn.discordapp.com/attachments/1393826223959838720/1393865501872226395/AE97D42F-4501-41BC-B944-886250CDA59F.png?ex=6874b9e8&is=68736868&hm=91d977d1e96cd4a36e8f686bfc8685e98c615ee85bdffbd89df161e7eff096cc&)

Ya tenemos nuestra aplicación ejecutandose, podemos ingresar la url localhost:5173 en cualquier navegador y ver la página por defecto.

Ahora podemos hacer un repositorio con git y nuestro primer commit

```bash
git init #crea el repositorio de git
git add . #agrega los archivos a stage 
git commit -m "commit inicial" #primer commit
```

Borramos el contenido de index.css y dejamos el archivo app.tsx de esta manera.


```JavaScript
import './App.css'

function App() {


  return (
    <>
      <div id="principal">
        <h1>Bienvenidos a nuestra primera app!</h1>
      </div>
    </>
  )
}

export default App
```

También configuramos el estilo en el archivo App.css

```CSS

#principal{
  background-color: navy;
  color: white;
  text-align: center;
  height: 600px;
  border-radius: 2%;

}

```

Todos los cambios que hacemos en el código, se ven reflejados en tiempo real, ya que la el sitio se esta ejecutando en un servidor, y no en el navegador. Este es el [modelo cliente servidor](#modelo-cliente-servidor)


![](https://cdn.discordapp.com/attachments/1393826223959838720/1393880586120073238/Animation.gif?ex=6874c7f4&is=68737674&hm=c1b6f5182e952145625acffa6685de5857c7fb33ebccdc57b7a87c12f9889cb9&)


Tenemos nuestra base creada, es momento de hacer un commit, ahora falta instalar las [dependencias](#dependencias). Por el momento vamos a instalar [tailwindcss](#tailwindcss) y [react-router](#react router)

Antes de instalar las dependencias, tenemos que detener la app apretando ctrl + c en el bash que la tiene en ejecucion, despues ejecutamos

```bash
npm install react-router
npm install tailwindcss @tailwindcss/vite
```

Ya que tenemos las dependencias instaladas, hay que configurarlas. Primero el Router.

Basicamente, lo que tenemos que lograr es que nuestra app responda a las acciones o solicitudes de los clientes, esto lo hacemos con **enrutamiento**.

```JavaScript
app.get('/', function (req, res) { res.send{'Hola Mundo!'}} )
```
Aca se muestra como una funcion devuelve "Hola mundo" cuando se le envía un mensaje HTTP GET a la carpeta raíz de la app(/).

Un enrutador es la herramienta que vamos a utilizar para gestionar estas rutas.

Ya tenemos instalada la dependencia, asi que podemos utilizar importar react-router y crear nuestras rutas.