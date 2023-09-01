// NOTA: React es una biblioteca para crear interfaces de usuario por lo tanto no solo sirve para crear aplicaciones web sino también sirve 
//       para aplicaciones de escritorio y móviles.

// Importamos la biblioteca de react
import React from 'react';

// Importamos otra biblioteca importante para indicar a react que estoy trabajando par ala web y como se trabaja en la web
// lo que tenemos que manipular es el DOM
import ReactDOM from 'react-dom/client';

// Ahora podemos importar el componente o componentes para usarlos
import { Greeting3, UsusrioCard } from './Greeting';

// Ahora para importar cuando exportamos usando el export default se hace indicando el nombre del modulo que lo colocamos nosostros
// y su respectiva ruta. Pero también si queremos importar la otra función que exportamos de forma individual dentro del mismo archivo 
// Product.js indicamos las llaves {}
import Product, {Navbar} from './Product'

// Importamos el componente botón
import { Button } from './Button';

// Importamos el nuevo componente TaskCard y que esta usando estilos css
import { TaskCard } from './Task';

// Importamos nuestro componente creado de la segunda forma que es usando una clase (class)
// que es otra forma adicional de crear un componente a parte de la más común que es con function
// que es más sencilla que usar una clase
import { Saludar } from './Saludar';

// Importamos nuestro componente que se va a usar para la explicación de FetchAPI
import { Post } from './Post';

// Importamos los componentes para los ejemplos del hook useState
import { Counter, HookInput } from './Counter';

// INICIO PRINCIPAL DE LA APLICACIÓN
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

// Arreglo de ejemplo
const users = [
    {
        id: 1,
        name: 'Ryan Ray',
        imagen: 'https://robohash.org/user1'
    },
    {
        id: 1,
        name: 'Joe',
        imagen: 'https://robohash.org/user2'
    },
    {
        id: 3,
        name: 'Marcos',
        imagen: 'https://robohash.org/user3'
    }
]

// Función para ver lo del manejador de eventos en el input
// y es la forma más común ya que queda mucho más ordenado 
// y entendible el código en el elemento htlm
const hancleChange = (event) => {
    console.log(event.target.value);
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

    // Por lo tanto ya con el concepto de props, podemos pasarle un dato a un componente ya que recordemos que no son más que
    // una función, por lo tanto para pasar un valor simplemente escribimos como una especia de atributo algo de la siguiente forma:
    // <Greeting3 title="Hola"/> y title="Hola" son 2 valores que quiero pasarles, es decir, no están definidos yo puedo pasarle
    // cualquier cosa al componente y lo único requerido es que tienen que tener ese formato como si fuera clave valor.
    // Adicionalmente cuando queremos pasar un número u otra tipo de dato difetente a un string tenemos que pasarlo con la 
    // interpretación de jsx es decir con llaves {}
    // Ejemplo:
    // <Greeting3 y={30}/> // Números
    // <Greeting3 z={true} // Boolean
    // <Greeting3 a={[1, 2, 3]}/> // Array
    // <Greeting3 address={{street: '123 Main Street', city: 'New York'}/> // Objects
    // 
    // Y también podemos pasar funciones
    // <UsusrioCard {function () { alert('Hello') }}/>
    //
    <>
        {/* Este es un ejempolo de comentario en JSX dentro de etiquetas */}
        
        <Button text="Click me"/>
        <Button text="Pay"/>
        <Button text='Hello World'/>
        
        {/*NOTA: Ahora que pasa si quiero aceptar otro valor por defecto, 
        es decir que me pueden pasar otra porpiedad pero es opcional entonces en
        el componente indicamos un valor por defecto con el igual o don el defaultProps*/}
        <Button text='' nombre='Joe'/>

        <Greeting3 title="Hola Mundo" name="Joe"/>
        <Greeting3 title="Hola React" name="Ryan"/>
        <Greeting3 title="Hola JSX"/>
        <Greeting3 title="Hola JavaScript"/>
        <Greeting3 title="Hola Fazt"/>

        <UsusrioCard 
            name="Ryan Ray" 
            amount={3000} 
            married={true} 
            points={[99, 33.3, 22.2]} 
            address={{street: '123 Main Street', city: 'New York'}}
            greet={function () { alert('Hello') }}
        />

        <UsusrioCard
            name="Homer Simpson"
            amount={1000}
            married={false}
            points={[100, 20]}
            address={{
                street: 'Siempre Viva some 123',
                city: 'Springfield'
            }}
        />

        <TaskCard ready={true}/>

        <Saludar/>

        {/* Vamos a crear un input de html para ver sus eventos, adicionalmente no necesariamente
        dentro de las llaves tenemos que escribir la función ( por ejemplo: <input id="hola" onChange={ (event) => {} )
        sin que podemos crearla fuera del método render y llamarla */}
        <input id="hola" onChange={hancleChange}/>

        {/* Otro ejemplo con Event Handler */}
        <input id="hola2" onDoubleClick={() => {
            console.log('Double click');
        }}/>

        {/* Otro ejemplo con Event Handler en formularios */}
        {/* NOTA: Ahora como sabemos en html tiene un comportamiento por defecto el cual es que refresca la página cuando 
                  envía los datos al servidor, cosa que a día de hoy no esta muy bien visto, por lo tanto para poder cancelar
                  ese comportamiento en React es del event usar la funció preventDefault  */}
        <form onSubmit={(ev) => { 
                ev.preventDefault();
                alert('Enviado');
            }}>
            <h1>Registro de usuario</h1>
            <button>Enviar</button>
        </form>

        <br/>
        {/* Componente Post para el tema de fetch API */}
        <Post/>

        {/* Para recorrer un arreglo en React se usa una forma que es mucho más cómoda
        por así decirlo que es a través, de métodos de arreglos. Ya que si sabemos en 
        JS lo hacemos a través de un bucle for o while, etc, pero en React lo que hace es
        usar un enfoque que se le conoce como enfoque declarativo, o mejor dicho es una forma
        de evitarnos estar escribiendo en código como recorrer un arreglo. Y es que en Javascript
        ya hay métodos que nos permiten recorrer arreglos de forma sencilla como son por ejemplo
        el map, filter, reduce, forEach. Y en React lo hacemos siguiente forma: */}
        {users.map( (user, i) => {
            // Ahora como React arroja un warning que inidica que cada elemento debe tener un key único
            // que React lo solicita. Ahora tembién como map al recorrer devuelve un segundo parámetro que 
            // un índice lo podemos usar para satisfacer el key 
            return <div key={i}>
                <h1>{user.name}</h1>
                <img src={user.imagen}/>
            </div>;
        })}

        {/* Primer Componenete para el ejemplo del hook useState */}
        <Counter/>

        <br/>
        {/* Segundo Componenete para el ejemplo del hook useState */}
        <HookInput/>

    </>
);