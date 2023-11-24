import React from 'react'
import Back from './Back';
import './Principal.css';
import './Tigo.css';

const Tigo = ({ onBackClick }) => {
  return (
    <article>  
    <div className='encabezadoTigoM'>
      <div className="boton-back">
        <Back onClick={onBackClick} />
        <p className='TitTigoMon'>Tigo Money</p>
      </div>
    </div>
    <img src="tigoM.png" alt="tigo money" className='TigoMoney'/>
    <h2 className='SubIniciar'>Iniciar Sesion</h2>
    </article>
  )
}



export default Tigo;