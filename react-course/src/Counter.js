import { useState, useEffect } from "react";

/* Primer Ejemplo Hook useState */
export function Counter() {
  
  // Entonces para poder decirle que este elemento va a cambiar tengo
  // decirle a react que va a cambiar y para ello tenemos que usar una 
  // función llamada useState() la cual devuelve un arreglo que tiene
  // dos parametros, donde el primero es un elemento y el segundo es una 
  // función. Adicionalmente al indicar el diez o lo que queramos en (useState(10)) 
  // es la forma como inicializamos la variable counter es decir como si hicieramos 
  // let counter = 10; solo que vamos a tener también una función que llamamos setCounter que
  // va a permitir actualizarlo.
  const [ counter, setCounter ] = useState(10);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      
      <button onClick={() => {
        setCounter(counter + 1)
      }}>
        Sumar
      </button>

      <button onClick={() => {
        setCounter(counter - 1)
      }}>
        Restar
      </button>

      <button onClick={() =>{
        setCounter(1000)
      }}>
        Reiniciar
      </button>

    </div>
  )

 
}

/* Segundo Ejemplo Hook useState con inputs*/
export function HookInput() {

  const [ mensaje, setMensaje ] = useState('');

  return (
    <div>
      <input onChange={ (ev) => setMensaje(ev.target.value) }/>
      <button onClick={() => {
        alert('El mensaje es: ' + mensaje)
      }}>
        Guardar
      </button>
    </div>
  )

}

/* Ejemplo usando el hook useEffect */
export function HookUseEfect(){

  const [ mensaje, setMensaje ] = useState('');
  const [ counter, setCounter ] = useState(0);

    /*
  Otro hook usado es useEfect el cual sirve cuando nosotros vamos a tener cambios 
  en la interfaz, por ejemplo cuando tipeo algo en un input quiero que vaya mostrando 
  en o otro mensaje por consola lo que voy tipeando. Es decir por ejemplo que vamos a 
  ejecutar una función cada vez que el valor del input cambie.
  
  En este caso el use efect va a estar pendiente del componente donde se esta usando,
  adicionalmente si no especificamos el arreglo vacío [], es decir:
  
      useEffect( () => {
        console.log('render');
      });

  Va a estar siempre pendiente y en este caso cada vez que el input cambie va a mostrar el 
  consol.log('rencer'), pero si no queremos dicho comportamiento y que se ejecute un sola 
  vez cuando se crea el componente especificamos el arreglo vacío antes mencionado.

  Por lo tanto su primer parámetro sería una función normal o una arrow function y en caso de que 
  solo lo queremos ejecutar la primera vez que se crea el componente especificariamos como segundo 
  argumento el arreglo vacío. 

  Ejemplo:

      useEffect( () => {
        console.log('render');
      }, [ ]);

      
  También si por ejemplo si quiero que el useEffect se ejecute cuando el counter cambie, es decir, cuando se vaya
  incrementando no cuando el input cambie, entonces para ello lo podemos especificar en el arreglo 

      useEffect( () => {
        console.log('render');
      }, [ counter ]);

*/
 useEffect( () => {
  console.log('render');
 }, [ counter ]);

 return (
  <div>

    {/* En este caso tenemos dos elementos cada uno con su propio estado independiente */}

    <input onChange={ (ev) => setMensaje(ev.target.value) }/>
        <button onClick={() => {
          alert('El mensaje es: ' + mensaje)
        }}>
          Guardar
        </button>

    <h1>Counter: {counter}</h1>
    <button onClick={() => setCounter(counter + 1)}>
      Incrementar
    </button>
  </div>
 )
 

}
