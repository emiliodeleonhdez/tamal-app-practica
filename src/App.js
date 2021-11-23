import logo from "./logo.svg";
import "./App.css";
import CardTamal from "./Components/Cards/CardTamal/CardTamal";
import CardAtole from "./Components/Cards/CardAtole/CardAtole";
import { Route, Routes, Link } from "react-router-dom";
import Index from "./Components/Index";

function App() {
  return (
    <div className="App">
      <h1>La mejor app de Tamales</h1>
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <Link to="/" className="nav-link">Inicio</Link>
          <Link to="/tamales" className="nav-link">Tamales</Link>
          <Link to="/atoles" className="nav-link">Atoles</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Index/>} />
          <Route path="/tamales" element={<CardTamal />} />
          <Route path="/atoles" element={<CardAtole />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
