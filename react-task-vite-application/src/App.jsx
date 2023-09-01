import Tasklist from './Tasklist';
import TaskForm from './TaskForm';

// Importamos los hooks
import { useState, useEffect } from 'react'; 'react';

// Importamos nuestras tareas y las renombramos usando as
import { tasks as data } from './tasks';


function App() {

  // Ahora como queremos que este componente sea el encargado de pasar el arreglo
  // de tareas a los otros dos componentes ya que lo teníamos solo en Tasklist lo
  // que hacemos es moverlo acá
  const [tasks, setTasks] = useState([]);

    // Cuando cargue el componente establecemos los valores
    useEffect(() => {
        setTasks(data)
    }, [])

    // Creamos una función para crear tareas la cual va a recibir una tarea
    // para añadirlo al arreglo y devolverlo para que lo pueda usar el otro
    // componente
    function createTask(taskTitle){
      // En este caso usamos un spred para crear una copia del arreglo y no alterar
      // el original y le definimos el objeto nuevo como segundo parámetro ya que
      // desde el TaskForm estamos mandando un String
      setTasks([...tasks, {
        title: taskTitle,
        id: tasks.length,
        description: 'Nueva tarea'
      }])
    }

  return (
    <>
      <TaskForm crearTarea={createTask}/>
      <Tasklist tasks={tasks}/>
    </>
  )
}

export default App