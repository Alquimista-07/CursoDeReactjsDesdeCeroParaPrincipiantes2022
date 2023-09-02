// NOTA: Este componente que creamos se va a basar en un término llamado contexto, el contexto en React es una forma de pasar datos que pueden
//       considerarse globales a un árbol de componentes sin la necesidad de estar haciendo lo que estabamos realizando que es que el componente
//       padre (App) maneja el estado y los valores del arreglo para pasarlos posteriormente al TaskForm, luego al TaskList, y luego al TaskCard
//       y como nos damos cuenta estabamos manejandolo pasando de padre a hijo y esto en una aplicación grande se vuelve inmantenible y por lo
//       tanto para resolver ese problema usamos el contexto.

// NOTA: Entonces lo que hacemos es crear una función la cual no va a retornar un div sino lo que va a retornar es
//       justamente un elemento que nos va a permitir poder englobar al resto.
//       Es decir, en React cuando nosotros por ejemplo dentro de un componente le decimos que van a ir más componentes
//       se le puede llamar componentes hijos y hay una propiedad especial que se le llama children, es decir, podemos
//       tener el componente y sabemos que va a recibir props, pero de esos props le podemos decir que de todas sus
//       propiedades existe esa propiedad especial llamada children y ese children es como decir aquí van a ir más
//       componentes

import { createContext, useState, useEffect } from "react";

// Importamos nuestras tareas y las renombramos usando as
import { tasks as data } from "../data/tasks";

// NOTA: Entonces vamos a usar una función llamada createContext que lo que retorna es un arreglo
//       y la vamos a llamar o asignar a una variable llamada TaskContext y por ahora lo vamos a
//       interpretar como el nombre del contexto. Entonces el TaskContext lo que hace es colocarle
//       un nombre al componente que engloba a los otros pero en si a dicho componente se le conoce
//       como provider porque justamente provee de un estado al resto
export const TaskContext = createContext();

export function TaskContextProvider(props) {
  // NOTA: Por lo tanto ahora como tenemos un provider que meneja el contexto global lo que vamos a hacer
  //       es un refactor y mover las funciones y arreglos a este componente, y así ya como esto esta de
  //       forma global los demás componentes van a poder usarlas.

  // Ahora como queremos que este componente que es el global sea el encargado de pasar el arreglo
  // de tareas a los otros dos componentes
  const [tasks, setTasks] = useState([]);

  // Creamos una función para crear tareas la cual va a recibir una tarea
  // para añadirlo al arreglo y devolverlo para que lo puedan usar los otros
  // componentes
  function createTask(task) {
    // En este caso usamos un spred para crear una copia del arreglo y no alterar
    // el original y le definimos el objeto nuevo que se le esta mandando en el prop.
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  // Función para eliminar tareas
  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  // Cuando cargue el componente TaskContextProvider es creado
  // el useEffect se va a ejecutar(Como sabemos solo una vez por
  // la definición del arreglo vacío []) y lo único que va a hacer
  // es establecer en las tasks los datos establecemos los valores
  useEffect(() => {
    setTasks(data);
  }, []);

  // Y ahora con el value lo que vamos a hacer es exportar lo que necesitan los demás componentes
  // para usarlos y por lo tanto ya cualquier componente puede usarlos y por lo tanto ya no los 
  // pasaríamos como props como lo teníamos codificado anteriormente.
  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
