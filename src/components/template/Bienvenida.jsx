import React from "react";
import BotonCafe from "../BotonCafe";
import "./Bienvenida.css";
import { Link } from "react-router-dom";

function Bienvenida() {
  return (
    <div className="contenedor">
      
      <div className="bienve">
        <h1>Bienvenidos a</h1>
      </div>
      <div className="pastel">
        <h1>Pasteleria Julieta</h1>
      </div>
      <div>
        <h2>Pasteleria & Panaderia</h2>
      </div>
      <div className="botonvamos">
        <Link to='/Login'>
        <BotonCafe>Vamos</BotonCafe>
        </Link>
        
      </div>
    </div>
  );
}

export default Bienvenida;
