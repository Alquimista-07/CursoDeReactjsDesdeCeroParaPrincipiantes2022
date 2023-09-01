import { useState } from "react";

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
