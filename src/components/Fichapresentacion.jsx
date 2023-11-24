import React from "react";
import "./FichaPresentacion.css";
function FichaPresentacion() {
  const pastel = props.pastel;
  return (
    <article>
      <div className="contenedor">
        <div className="descripcion">
          <div className="descripcion_texto">
            <h3 className="dona_nombre">{pastel.titulo[0]}</h3>
            <p>{pastel.descripcion[0]}</p>
          </div>
          <div>
            <img src={pastel.imgUrl[0]}/>
          </div>
        </div>
        <div className="precios_superior">
        <div className="precios">
          {pastel.precio[0]}
          <p className="disp">{pastel.disponible[0]}</p>
          
        </div>
        </div>
      </div>
    </article>
  );
}

export default FichaPresentacion;
