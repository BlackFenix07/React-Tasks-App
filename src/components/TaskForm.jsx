import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="mx-auto max-w-md">
      <form className="mb-5 p-7 bg-slate-700" onSubmit={handleSubmit}>
        <h1 className="mb-3 font-bold text-2xl text-white">Crear tarea</h1>
        <input
          className="mb-2 p-3 w-full bg-slate-300"
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus/>
        <textarea
          className="p-3 w-full bg-slate-300"
          placeholder="Escribe la descripción de tu tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}>
        </textarea>
        <button className="px-2 py-2 bg-indigo-500 text-white">Guardar</button>
      </form>
    </div>
  );
}
export default TaskForm;