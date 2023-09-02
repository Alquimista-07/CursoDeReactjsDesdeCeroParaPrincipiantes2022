function TaskCard({ task, eliminarTarea }) {

  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <button onClick={() => eliminarTarea(task.id)}>
        Eliminar tarea
      </button>
    </div>
  );
}

export default TaskCard;
