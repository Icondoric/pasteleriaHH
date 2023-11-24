import React from 'react'
import './TarjTigom.css';

function TarjTigom() {
  return (
    <div>
      <div className="cajaLlenadoDatos">
        <div className="CodigoPais">
          <p className="CodPais">Codigo del Pais</p>
          <form className="formFecha">
            <div className="form_Codi-Pais">
              <input
                type="text"
                id="cod"
                className="form_inputCodigoP"
                placeholder=" "
              />
              <label htmlFor="fecha" className="form_labelCodigoP">
                Bo +591
              </label>
            </div>
          </form>
        </div>
        <div className="CajaCelularT">
          <p className="CelularT">Nro Celular</p>
          <form className="formNroCel">
            <div className="formCelularT">
              <input
                type="text"
                id="nro"
                className="form_inputCelularT"
                placeholder=" "
              />
              <label htmlFor="cvv" className="form_labelCelularT">
                No. Celular
              </label>
            </div>
          </form>
        </div>
      </div>
      
      <div>
        <div className='cajaPIN'>
            <form className='formContraseña'>
                <div className='form_Contraseña'>
                    <input type="text" id='Contraseña' className='form_inputContraseña' placeholder=' '/>
                    <label htmlFor="tajeta" className='form_labelContraseña'>PIN o Contraseña</label>
                </div>
            </form>
        </div>
    </div>
    </div>
  )
}

export default TarjTigom