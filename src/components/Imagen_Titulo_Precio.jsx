import React from "react";
import "./Imagen_Titulo_Precio.css";
function Imagen_Titulo_Precio(props) {
  const pastel = props.pastel;
  return (
    <div className="contenedor-producto">
        <img className="imagen" src={pastel.imgUrl} alt="Pastel" />
        <h2>{pastel.titulo}</h2>
        <p>{pastel.precio}</p>
    </div>
  );
}

export default Imagen_Titulo_Precio;
