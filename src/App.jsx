import TaskList from "./components/TaskList"; // La estructura de un componente se puede crear automáticamente escribiendo rfce.
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <main className="full-screen bg-black">
      <div className="container mx-auto">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}
export default App;