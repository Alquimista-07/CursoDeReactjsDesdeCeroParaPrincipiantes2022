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

// Ahora para indicarle a React que voy a poner dentro de la aplicación usamos el root y la función render
// la cual espera elementos hijos html
root.render(
    <h1>Hola Mundo Desde React!!!...</h1>
);