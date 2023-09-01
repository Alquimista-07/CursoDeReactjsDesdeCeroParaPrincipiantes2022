import { useState } from "react"

function TaskForm({crearTarea}) {
    
    const [title, setTitle] = useState("");

    const handleSubmit = (ev) => {
        // Evitamos el comportamiento por defecto para que al llamar el evento submit no recargue
        ev.preventDefault()
        
        // Le damos el valor a la función que se estar recibiendo
        crearTarea(title)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Escribe tu tarea"
                onChange={(ev) => setTitle(ev.target.value)}
            />
            <button>
                Guardar
            </button>
        </form>
  )
}

export default TaskForm