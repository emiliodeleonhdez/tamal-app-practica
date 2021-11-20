import logo from "./logo.svg";
import "./App.css";
import Card from "./Components/Card/Card";

function App() {
  return (
    <div className="App">
      <h1>La mejor app de Tamales</h1>
      <div>
        <button type="button" class="btn btn-primary">
          Ahuevo
        </button>
        <Card />
      </div>
    </div>
  );
}

export default App;
