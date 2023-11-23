import React from 'react';
import '../styles/EntradaTextos.css'; 

const EntradaTexto = ({ Texto }) => {
  return (
    <div>
      <input type="text" className="input-texto" placeholder={Texto} />
    </div>
  );
};

export default EntradaTexto;