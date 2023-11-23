import React from "react";
import { infodonas } from "../assets/donasAPI";
import "./FichaDonas.css";
import botonVerde from "./botonVerde";
function FichaDonas(props) {
  const infodonas = props.infodonas;
  return (
    <article>
      <div className="contenedor">
        <div className="descripcion">
          <div className="descripcion_texto">
            <h3 className="dona_nombre">{infodonas.titulo}</h3>
            <p>{infodonas.descripcion}</p>
          </div>
          <div>
            <img src={infodonas.img_dona} alt="donita" />
          </div>
        </div>

        <div className="precios">
          {infodonas.precio}
          <p className="disp">{infodonas.disponible}</p>
        </div>
        <botonVerde/>
      </div>
    </article>
  );
}

export default FichaDonas;
