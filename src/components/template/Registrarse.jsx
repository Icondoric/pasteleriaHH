import React from "react";
import BotonCafe from "../BotonCafe";
import BotonSecion from "../moleculas/Iniciarsecion";
import EntradaTexto from "../moleculas/EntradaTexto";
import ConCuenta from "../moleculas/ConCuenta";
import "./Registrarses.css";

function Registrarse() {
  return (
    <>

      <div className="titulo">
      <h1>Registrate</h1>
      </div>
      <EntradaTexto Texto="Full name" />
      <EntradaTexto Texto="Email or Number" />
      <EntradaTexto Texto="Password" />
      <BotonCafe>Inicia Sesión</BotonCafe>
      <ConCuenta/>
      <BotonSecion />
    </>
  );
}

export default Registrarse;
