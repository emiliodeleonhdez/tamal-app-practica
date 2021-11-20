import logo from "./logo.svg";
import "./App.css";
import CardTamal from "./Components/Cards/CardTamal/CardTamal";
import CardAtole from "./Components/Cards/CardAtole/CardAtole";



function App() {
  return (
    <div className="App">
      <h1>La mejor app de Tamales</h1>
      <div>
        <CardTamal />
        <CardAtole />
      </div>
    </div>
  );
}

export default App;
