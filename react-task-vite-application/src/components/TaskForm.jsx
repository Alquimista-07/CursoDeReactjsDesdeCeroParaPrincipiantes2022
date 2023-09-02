import { useState } from "react"

function TaskForm({crearTarea}) {
    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (ev) => {
        // Evitamos el comportamiento por defecto para que al llamar el evento submit no recargue
        ev.preventDefault()
        
        // Le pasamos un objeto que tiene un titulo y una descripción
        crearTarea({
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