import React from "react";
import "./MuffinsSection.css";
import Verde from "./Verde";
function MuffinSection (props) {
  const infoMuffins = props.infoMuffins;
  return (
    <article>
      <div className="conteiner">
        <div className="descripcion">
          <div className="descripcion_texto">
            <h3 className="muffin_nombre">{infoMuffins.title}</h3>
            <p>{infoMuffins.description}</p>
          </div>
          <div>
            <img src={infoMuffins.img_muffin} alt="ChescoMuffin" />
          </div>
        </div>

        
        <div className="precios_superior">
        <div className="precios">
          {infoMuffins.precio}
          <p className="disponibilidad">{infoMuffins.disponible}</p>
          
        </div>
        <Verde/>
        </div>
      </div>
    </article>
  );
}

export default MuffinSection;