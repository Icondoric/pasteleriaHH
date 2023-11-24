import React, { useState } from "react";
import "./SeleccionTamaño.css";

function Selecciontamaño(props) {
  const [seleccionado, setSeleccionado] = useState(null);

  const handleSeleccionar = (tamaño) => {
    setSeleccionado(tamaño);
  };

  return (
    <div className="contenedor-seleccion">
      <h2>Seleccionar Tamaño</h2>
      <div className="orden-button">
        <button
          className={`button-tamaño ${seleccionado === 10 ? "seleccionado" : ""}`}
          onClick={() => handleSeleccionar(10)}
        >
          10 porciones
        </button>
        <button
          className={`button-tamaño ${seleccionado === 20 ? "seleccionado" : ""}`}
          onClick={() => handleSeleccionar(20)}
        >
          20 porciones
        </button>
        <button
          className={`button-tamaño ${seleccionado === 30 ? "seleccionado" : ""}`}
          onClick={() => handleSeleccionar(30)}
        >
          30 porciones
        </button>
      </div>
    </div>
  );
}

export default Selecciontamaño;