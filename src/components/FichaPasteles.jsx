import React from "react";

import "./FichaPasteles.css";
import Verde from "./Verde";
function FichaPasteles(props) {
 const Pasteles = props.Pasteles;
  return (
    <article>
      <div className="contenedor">
        <div className="descripcion">
          <div className="descripcion_texto">
            <h3 className="dona_nombre">{Pasteles.titulo}</h3>
            <p>{Pasteles.descripcion}</p>
          </div>
          <div>
            <img className="imagen" src={Pasteles.imgUrl}/>
          </div>
        </div>

        
        <div className="precios_superior">
        <div className="precios">
          {Pasteles.precio +"Bs"}
          <p className="disp">Disponible {Pasteles.disponible}</p>
          
        </div>
        <Verde/>
        </div>
      </div>
    </article>
  );
}
export default FichaPasteles;


