import React from "react";
import "./FichaPasteles.css";
import Verde from "./Verde";
function FichaPasteles(props) {
  const pastel = props.pastel;
  return (
    <article>
      <button className="button-style">
      <div className="contenedor">
        <div className="descripcion">
          <div className="descripcion_texto">
            <h3 className="dona_nombre">{pastel.titulo}</h3>
            <p>{pastel.descripcion}</p>
          </div>
          <div>
            <img src={pastel.imgUrl}/>
          </div>
        </div>

        
        <div className="precios_superior">
        <div className="precios">
          {pastel.precio}
          <p className="disp">{pastel.disponible}</p>
          
        </div>
        <Verde/>
        </div>
      </div>
      </button>
    </article>
  );
}

export default FichaPasteles;
