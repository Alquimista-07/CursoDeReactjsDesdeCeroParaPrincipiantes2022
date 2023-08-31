// NOTA: React es una biblioteca para crear interfaces de usuario por lo tanto no solo sirve para crear aplicaciones web sino también sirve 
//       para aplicaciones de escritorio y móviles.

// Importamos la biblioteca de react
import React from 'react';

// Importamos otra biblioteca importante para indicar a react que estoy trabajando par ala web y como se trabaja en la web
// lo que tenemos que manipular es el DOM
import ReactDOM from 'react-dom/client';

// Recordemos que en la carpeta public tenemos un archivo index.html el cual tiene un <div id="root"></div>
// que es donde react va a montar la aplicación. Por lo tanto ara indicarle que es lo que vamos a poner dentro 
// de ese elemento usamos ReactDOM.createRoot y obtenemos el elemento por su id. Y todo eso nos va a devolver
// es una aplicación inicial de React y es algo que React llama el elemento Root y con esto ya tenemos una app
// inicializada
const root = ReactDOM.createRoot(document.getElementById('root'));

// Componente: Cuando hablamos de componentes en React literalmente estamos hablando de funciones
// y el asunto con los componentes es que son funciones que siempre retornan una interfaz y dentro
// de dichas funciones podemos retornar esas porciones de interfaz que es un poco extraño ya que 
// es html. Adicionalmente como es un componente esto quiere decir que lo podemos reutilizar
function Greeting(){
    // También es bastante importante tener en cuenta es que si nos damos cuenta siempre llamamos un <div></div>
    // al inicio y esto es justamente porque existe una regla la cual dice que siempre debe haber un elemento que
    // contenga a los demás.
    return <div>
        <h1>Este es un componente!</h1>
        <p>Lorem ipsum dolor 123</p>
    </div>
}

// Ahora para indicarle a React que voy a poner dentro de la aplicación usamos el root y la función render
// la cual espera elementos hijos html
root.render(
    // Utilizamos el componente y lo que nos dice react para poder utilizar o interpretar una función dentro de una porción de
    // html debemos indicar las llaves {} de la siguiente forma:
    //
    //  { Greeting() }
    //
    // Pero el hecho de usar llaves hace que no se vea tan entendible y si es una app grande es peor, por lo tanto una de las bondades
    // que ofrece React es que podemos escribir el llamado a la función como si fuera una etiqueta html incluso no es necesario cerrar
    // la etiqueta como se hace en html normalmente así:
    //
    // <Greeting></Greeting>
    // 
    // Sino que también podemos indicar el cierre de la siguiente forma:
    //
    // <Greeting/>
    //
    // Adicionalmente como son componentes los podemos reutilizar es decir llamar varias veces.
    <div>
        <Greeting/>
        <Greeting/>
        <Greeting/>
        <Greeting/>
    </div>
);