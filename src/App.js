import freeCodeCampLogo from "./images/freecodecamp-logo.png";
import ListaDeTareas from "./components/ListaDeTareas.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img 
          src={freeCodeCampLogo} 
          className="freecodecamp-logo" />
      </div>
      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;