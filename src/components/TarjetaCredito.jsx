import React from 'react'
import './TrajetaCredito.css';

function TarjetaCredito() {
  return (
    <div>
        <p className='TarjetaAceptada'>Tarjetas aceptadas</p>
        <p className='NumeroCompleto'>Numero completo de la tarjeta</p>
        <div>
            <form className='form'>
                <div className='form_codigoTarjeta'>
                    <input type="text" id='tajeta' className='form_numero' placeholder=' '/>
                    <label htmlFor="tajeta" className='form_labelCodigo'>0000 0000 0000 0000</label>
                </div>
            </form>
        </div>
    </div>
  )
}

export default TarjetaCredito