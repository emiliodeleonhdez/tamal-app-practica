import logo from "./logo.svg";
import "./App.css";
import CardTamal from "./Components/Cards/CardTamal/CardTamal";
import CardAtole from "./Components/Cards/CardAtole/CardAtole";
import { Route, Routes, Link } from "react-router-dom";
import Index from "./Components/Index";
import React, { useState } from "react";
import { type } from "os";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Tamal Verde",
      type: "tamal",
      tipoDeHoja: [
        { hoja: "Hoja de Maíz", precio: 10, disponible: true },
        { hoja: "Hoja de Plátano", precio: 20, disponible: true },
      ],
    },
    {
      id: 2,
      title: "Tamal Rojo",
      type: "tamal",
      tipoDeHoja: [
        { hoja: "Hoja de Maíz", precio: 10, disponible: true },
        { hoja: "Hoja de Plátano", precio: 20, disponible: true },
      ],
    },
    {
      id: 3,
      title: "Tamal de mole",
      type: "tamal",
      tipoDeHoja: [
        { hoja: "Hoja de Maíz", precio: 10, disponible: true },
        { hoja: "Hoja de Plátano", precio: 20, disponible: true },
      ],
    },
    {
      id: 4,
      title: "Tamal de dulce",
      type: "tamal",
      tipoDeHoja: [
        { hoja: "Hoja de Maíz", precio: 10, disponible: true },
        { hoja: "Hoja de Plátano", precio: 20, disponible: true },
      ],
    },
    {
      id: 5,
      title: "Atole de fresa",
      type: "atole",
      tamano: [
        { medida: "Mediano", precio: 10, disponible: true },
        { medida: "Grande", precio: 20, disponible: true },
      ],
    },
    {
      id: 6,
      title: "Atole de Chocolate",
      type: "atole",
      tamano: [
        { medida: "Mediano", precio: 10, disponible: true },
        { medida: "Grande", precio: 20, disponible: true },
      ],
    },
    {
      id: 7,
      title: "Atole de Cajeta",
      type: "atole",
      tamano: [
        { medida: "Mediano", precio: 10, disponible: true },
        { medida: "Grande", precio: 20, disponible: true },
      ],
    },
    {
      id: 8,
      title: "Atole de Guayaba",
      type: "atole",
      tamano: [
        { medida: "Mediano", precio: 10, disponible: true },
        { medida: "Grande", precio: 20, disponible: true },
      ],
    },
  ]);

  const [pedido, setPedido] = useState([]);

  return (
    <div className="App">
      <h1>La mejor app de Tamales</h1>
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <Link to="/" className="nav-link">
            Inicio
          </Link>
          <Link to="/tamales" className="nav-link">
            Tamales
          </Link>
          <Link to="/atoles" className="nav-link">
            Atoles
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route
            path="/tamales"
            element={products
              .filter((product) => {
                return product.type === "tamal";
              })
              .map(({ id, title, tipoDeHoja }) => {
                return (
                  <CardTamal
                    key={id}
                    cardTitleText={title}
                    tipoDeHoja1={tipoDeHoja[0].hoja}
                    tipoDeHoja2={tipoDeHoja[1].hoja}
                  />
                );
              })}
          />
          <Route
            path="/atoles"
            element={products
              .filter((product) => {
                return product.type === "atole";
              })
              .map(({ id, title, tamano }) => {
                return (
                  <CardAtole
                    key={id}
                    cardTitleText={title}
                    tamanoDeAtole1={tamano[0].medida}
                    tamanoDeAtole2={tamano[1].medida}
                  />
                );
              })}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
