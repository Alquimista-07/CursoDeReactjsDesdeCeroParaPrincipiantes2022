// Le pasamos el arreglo de tareas como un props
function Tasklist({tasks}) {
    
    // Validamos
    if(tasks.length === 0){
        return <h1>No hay tareas aún!</h1>
    }

    return (
        <div>
            {tasks.map((task) => (
                <div key={task.id}>
                    <h1>{task.title}</h1>
                    <p>{task.description}</p>
                </div>
            ))}
        </div>
    )
}

export default Tasklist;
