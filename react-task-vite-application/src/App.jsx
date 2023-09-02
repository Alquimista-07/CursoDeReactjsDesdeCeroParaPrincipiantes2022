import Tasklist from './components/Tasklist';
import TaskForm from './components/TaskForm';

// Importamos los hooks
import { useState, useEffect } from 'react'; 'react';

// Importamos nuestras tareas y las renombramos usando as
import { tasks as data } from './data/tasks';


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
    function createTask(task){
      // En este caso usamos un spred para crear una copia del arreglo y no alterar
      // el original y le definimos el objeto nuevo que se le esta mandando en el prop.
      setTasks([...tasks, {
        title: task.title,
        id: tasks.length,
        description: task.description
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