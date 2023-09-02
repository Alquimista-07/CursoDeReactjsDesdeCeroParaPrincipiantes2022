
// Vvamos a importar el nombre del TaskContext y que fue como lo nombreamos
// y adicionalmente para poder usar el contexto importamos desde React el useContext
import { TaskContext } from '../context/TaskContext';
import { useContext } from 'react';

// Acá a pesar de que el provider exporta todos los elementos incluyendo el arreglo
// acá si necesitamos recibirlo como un prop y no lo podemos pasar desde el contexto
// y esto es debido a que el Tasklist lo esta recorriendo con el map() y es algo que
// en si el Tasklist le esta pasando al TaskCard
function TaskCard({ task }) {

  // Usamos el useContext y le decimos que queremos usar le TaskContext
  // pero como el TaskContext es un objeto y acá solo necesitamos unos
  // valores de ese objeto entonces lo podemos desestructurar
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className='bg-gray-800 text-white p-4 rounded-md'>
      <h1 className='text-xl font-bold capitalize'>{task.title}</h1>
      <p className='text-gray-500 text-sm'>{task.description}</p>
      <button 
        onClick={() => deleteTask(task.id)} className='bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400'>
        Eliminar tarea
      </button>
    </div>
  );
}

export default TaskCard;
