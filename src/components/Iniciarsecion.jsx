import React from 'react';
import '../components/styles/Iniciarsecions.css'; 

const BotonSecion = ({ children, onClick, imagenSrc, imagenAlt }) => {
  return (
    <button className="boton-Secion" onClick={onClick}>
      <img src= "/Group 20Google.png"alt="Inicia sesión con Goggle Parangaricuritirimicuaro" className="google" />
      Inicia sesión con Google
      {children}
    </button>
  );
};

export default BotonSecion;