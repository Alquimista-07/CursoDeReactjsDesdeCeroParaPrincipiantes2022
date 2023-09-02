
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
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <button onClick={() => deleteTask(task.id)}>
        Eliminar tarea
      </button>
    </div>
  );
}

export default TaskCard;
