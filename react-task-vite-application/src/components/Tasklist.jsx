import TaskCard from './TaskCard';

// Ahora vamos a importar el nombre del TaskContext y que fue como lo nombreamos
// y adicionalmente para poder usar el contexto importamos desde React el useContext
import { TaskContext } from '../context/TaskContext';
import { useContext } from 'react';

function Tasklist() {

    // Usamos el useContext y le decimos que queremos usar le TaskContext
    // pero como el TaskContext es un objeto y acá solo necesitamos unos
    // valores de ese objeto entonces lo podemos desestructurar
    const { tasks } = useContext(TaskContext);
    
    // Validamos
    if(tasks.length === 0){
        return <h1 className='text-white text-4xl font-bold text-center'>No hay tareas aún!</h1>
    }

    return (
        <div className='grid grid-cols-4 gap-2'>
            {tasks.map((task) => (
                <TaskCard key={task.id} task={task}/>
            ))}
        </div>
    )
}

export default Tasklist;
