import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="p-4 bg-teal-700 text-white rounded-md">
      <h1 className="font-bold text-xl">{task.title}</h1>
      <p className="text-sm text-gray">{task.description}</p>
      <button
        className="mt-3 px-2 py-2 bg-red-500 hover:bg-red-300 rounded-md"
        onClick={() => deleteTask(task.id)}>
        Eliminar tarea
      </button>
    </div>
  );
}
export default TaskCard;