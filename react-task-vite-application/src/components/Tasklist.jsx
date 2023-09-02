import TaskCard from './TaskCard';

// Le pasamos el arreglo de tareas como un props
function Tasklist({tasks, borrarTarea}) {
    
    // Validamos
    if(tasks.length === 0){
        return <h1>No hay tareas aún!</h1>
    }

    return (
        <div>
            {tasks.map((task) => (
                <TaskCard key={task.id} task={task} eliminarTarea={borrarTarea}/>
            ))}
        </div>
    )
}

export default Tasklist;
