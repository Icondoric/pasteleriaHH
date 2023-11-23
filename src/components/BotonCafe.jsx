// BotonCafe.js
import React from 'react';
import './BotonCafe.css'; // Importar los estilos

const BotonCafe = ({ children, onClick }) => {
  return (
    <button className="boton-cafe" onClick={onClick}>
      {children}
    </button>
  );
};

export default BotonCafe;
 