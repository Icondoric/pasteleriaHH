import React from "react";
import "./InformacionTarj.css";

function InformacionTarj() {
  return (
    <div>
      <div className="cajaLlenadoPago">
        <div className="FechaPago">
          <p className="FechaTarjetaPago">Fecha de Vencimiento</p>
          <form className="formFecha">
            <div className="form_fechaVencimiento">
              <input
                type="text"
                id="fecha"
                className="form_inputFecha"
                placeholder=" "
              />
              <label htmlFor="fecha" className="form_labelFecha">
                MM/YY
              </label>
            </div>
          </form>
        </div>
        <div className="CajaCvv">
          <p className="CVV">CVV</p>
          <form className="formCVV">
            <div className="form_Cvv">
              <input
                type="text"
                id="cv"
                className="form_inputCvv"
                placeholder=" "
              />
              <label htmlFor="cvv" className="form_labelCvv">
                000
              </label>
            </div>
          </form>
        </div>
      </div>
      <div>
        <p className='NumeroCompleto'>Nombre del Propietario</p>
        <div>
            <form className='formNompropietario'>
                <div className='form_NomPropietario'>
                    <input type="text" id='NomPropietario' className='form_inputNompropietario' placeholder=' '/>
                    <label htmlFor="tajeta" className='form_labelNomPropietario'>Como aparece en la Tarjeta</label>
                </div>
            </form>
        </div>
    </div>
    
    </div>
  );
}

export default InformacionTarj;
