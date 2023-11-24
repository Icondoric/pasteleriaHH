import React from 'react'
import Back from './Back';
import './Principal.css';
import './HeaderPagoTarj.css';

const HeaderPagoTarj = ({ onBackClick }) => {
  return (
    <div className='principal'>
      <div className="boton-back">
        <Back onClick={onBackClick} />
        <p className='TitTarjetaDeCredito'>Tarjeta de Credito</p>
      </div>
    </div>
  )
}



export default HeaderPagoTarj;