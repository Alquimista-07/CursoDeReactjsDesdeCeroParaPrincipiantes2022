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

// Si nos damos cuenta en el componente o función no estamos retornando un String sino html y esto es posible en
// React gracias a que usa una sintáxis llamada JSX que es pos así decirlo una combinciación de JS con html. Por
// lo tanto lo que permite JSX es retornar porciones de html que a la final va a ser transformado a JS
//
// Por lo tanto esto nos da algunas ventajas ya que por ejemplo supongamos que quiero hacer operaciones con JS 
// también podemos hacerlo con JSX, y tener la combinación de JS y html
function Greeting2(){
    /*
    // Ejemplo 1
    const married = true;
    return <h1>{married ? 'Estoy Casado! 😀' : 'No Estoy Casado!'}</h1>
    */

    // Ejemplo 2
    const user = {
        firstName: 'Jhon',
        lastName: 'Doe'
    }

    // También podemos crear una función dentro de otra función
    function add(x, y){
        return x + y
    }

    // Podemos convertir a string el objeto usando {JSON.stringify(user)} pero esto nos lo va a mostrar 
    // algo feo el texto, por lo tanto podemos usar la notación de punto de los objetos para combinarlo
    // con html.
    // Ahora como habíamos mencionando anteriormente que siempre debemos usar siempre <div></div> pero esto no siempre es así
    // ya que si no queremos usar un div dentro de otro div, es decir usar un contenedor vacío entonces para esto react nos 
    // permite usar una etiqueta  especial que nos da JSX llamada fragment y la indicamos como <></> y cumple con la regla de 
    // react que dice que siempre tiene que haber una etiqueta que contenga a otra y a su vez en JS dice que no voy a usar nada 
    // allí y de esta forma podemos evitar la etiqueta.
    return (
        <>
            <h1>{ user.firstName }</h1>
            <h3>{ user.lastName }</h3>

            <h2>{ add(10, 30) }</h2>
            
        </>
    );
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
    <>
        <Greeting2/>
        <Greeting2/>
        <Greeting2/>
    </>
);