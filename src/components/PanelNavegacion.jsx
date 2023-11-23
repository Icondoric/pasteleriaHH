// PanelNavegacion.js
import React from 'react';
import Back from './Back';
import BotonMufin from './BotonMufin';
import BotonCafe from './BotonCafe'; // Importar BotonCafe
import './PanelNavegacion.css';

const PanelNavegacion = ({ onBackClick, onMuffinClick }) => {
  return (
    <div className="panel-navegacion">
      <div className="boton-back">
        <Back onClick={onBackClick} />
      </div>
      <div className="boton-muffin">
        <BotonMufin onClick={onMuffinClick} />
      </div>
      {/* Nuevo contenido */}
      <div className="titulo-perfil">
        <h1>Pasteleria Julieta</h1>
        <p>Perfil</p>
      </div>
      <div className="botones-navegacion">
        <button>Principal</button>
        <button>Mis Pedidos</button>
        <button>Favoritos</button>
      </div>
      <div className="boton-cerrar-sesion">
        <BotonCafe onClick={() => console.log('Cerrar Sesión')}>Cerrar Sesión</BotonCafe>
      </div>
    </div>
  );
};

export default PanelNavegacion;
