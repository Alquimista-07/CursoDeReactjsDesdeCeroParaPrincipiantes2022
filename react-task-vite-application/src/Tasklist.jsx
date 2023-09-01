// Importamos nuestras tareas y las renombramos usando as
import { tasks as data } from './tasks';

import { useState, useEffect } from 'react';

function Tasklist() {

    const [tasks, setTasks] = useState([]);

    // Cuando cargue el componente establecemos los valores
    useEffect(() => {
        setTasks(data)
    }, [])
    
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
