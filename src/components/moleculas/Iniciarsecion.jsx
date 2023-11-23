import React from 'react';
import '../styles/iniciarsecions.css'; // Importar los estilos

const BotonSecion = ({ children, onClick, imagenSrc, imagenAlt }) => {
  return (
    <button className="boton-Secion" onClick={onClick}>
      <img src= "/Group 20Google.png"alt="Inicia sesión con Goggle" className="google" />
      Inicia sesión con Google
      {children}
    </button>
  );
};

export default BotonSecion;