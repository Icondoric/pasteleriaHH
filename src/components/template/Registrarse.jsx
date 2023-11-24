import React from "react";
import BotonCafe from "../BotonCafe";
import BotonSecion from "../Iniciarsecion";
import EntradaTexto from "../EntradaTexto";
import ConCuenta from "../ConCuenta";
import "./Registrarses.css";

function Registrarse() {
  return (
    <>
      <div className="fondo2"> 
      <div className="fondo-imagen2">
      <img src="./image 4.svg" alt="cupckake" />
      </div>
      <div className="titulo2">
      <h1>Registrate</h1>
      </div>
      <EntradaTexto Texto="Full name" />
      <EntradaTexto Texto="Email or Number" />
      <EntradaTexto Texto="Password" />
      <BotonCafe>Inicia Sesión</BotonCafe>
      <ConCuenta/>
      <BotonSecion />
      </div>
    </>
  );
}

export default Registrarse;
