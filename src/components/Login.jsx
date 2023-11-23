import React from "react";
import BotonCafe from "./BotonCafe";
import BotonSecion from "./Iniciarsecion";
import SinCuenta from "./SinCuenta";
import EntradaTexto from "./EntradaTexto";
import ConCuenta from "./ConCuenta";
import "./Logins.css";

function Login() {
  return (
    <>

      <div className="titulo">
      <h1>Inicio de sesión</h1>
      </div>
      <EntradaTexto Texto="Email or Number" />
      <EntradaTexto Texto="Password" />
      <div className="subtitulo"><h2>olvidaste tu contraseña</h2></div>
      <BotonCafe>Inicia Sesión</BotonCafe>
      <SinCuenta />
      <BotonSecion />
    </>
  );
}

export default Login;
