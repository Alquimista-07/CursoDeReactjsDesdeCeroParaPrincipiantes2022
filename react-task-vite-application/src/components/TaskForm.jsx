import { useState, useContext } from "react"

// Ahora vamos a importar el nombre del TaskContext y que fue como lo nombreamos
// y adicionalmente para poder usar el contexto importamos desde React el useContext
import { TaskContext } from '../context/TaskContext';

function TaskForm() {
    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    // Usamos el useContext y le decimos que queremos usar le TaskContext
    // pero como el TaskContext es un objeto y acá solo necesitamos unos
    // valores de ese objeto entonces lo podemos desestructurar
    const { createTask } = useContext(TaskContext);

    const handleSubmit = (ev) => {
        // Evitamos el comportamiento por defecto para que al llamar el evento submit no recargue
        ev.preventDefault()
        
        // Le pasamos un objeto que tiene un titulo y una descripción
        createTask({
            title,
            description
        });

        // Limpiamos los valores de los campos luego de crear la tarea
        setTitle('');
        setDescription('');
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* Le pasamos el valor del value al input y textarea para que cuando se actualice el estado se refleje de la misma forma */}
            <input placeholder="Escribe tu tarea"
                onChange={(ev) => setTitle(ev.target.value)}
                value={title}
                autoFocus
            />
            <textarea placeholder="Escribe la descripción de la tarea"
                onChange={(ev) => setDescription(ev.target.value)}
                value={description}>
            </textarea>
            <button>
                Guardar
            </button>
        </form>
  )
}

export default TaskForm