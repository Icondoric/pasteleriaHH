import React from "react";
import BotonCafe from "../BotonCafe";
import BotonSecion from "../Iniciarsecion";
import SinCuenta from "../SinCuenta";
import EntradaTexto from "../EntradaTexto";
import { Link } from "react-router-dom";

import "./Logins.css";

function Login() {
  return (
    <>

      <div className="titulo1">
      <h1>Inicio de sesión</h1>
      </div>
      <EntradaTexto Texto="Email or Number" />
      <EntradaTexto Texto="Password" />
      <div className="subtitulo"><h2>olvidaste tu contraseña</h2></div>
      <BotonCafe>Inicia Sesión</BotonCafe>
      <SinCuenta />
      <Link to ='https://www.google.com/intl/es/gmail/about/'>
      <BotonSecion />
      </Link>
      
    </>
  );
}

export default Login;