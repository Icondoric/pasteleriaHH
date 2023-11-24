import React from "react";
import "./FichaPasteles.css";
import Verde from "./Verde";
function FichaDestacados(props) {
  const postredestacado = props.postredestacado;
  return (
    <article>
      <div className="contenedor">
        <div className="descripcion">
          <div className="descripcion_texto">
            <h3 className="dona_nombre">{postredestacado.titulo}</h3>
            <p>{postredestacado.descripcion}</p>
          </div>
          <div>
            <img src={postredestacado.imgUrl}/>
          </div>
        </div>

        
        <div className="precios_superior">
        <div className="precios">
          {postredestacado.precio}
          <p className="disp">{postredestacado.disponible}</p>
          
        </div>
        <Verde/>
        </div>
      </div>
    </article>
  );
}

export default FichaDestacados;
