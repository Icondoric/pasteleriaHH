// Principal.js
import React from "react";
import "./PresenaciondelProducto.css";
/*import { fetchProducts } from "../assets/api";*/
import HeaderPresentacion from "./HeaderPresentacion";
import FichaPasteles from "./FichaPasteles";
import Imagen_Titulo_Precio from "./Imagen_Titulo_Precio";
import Selecciontamaño from "./SeleccionTamaño";

const PresentaciondelProducto = (props) => {
    const pastel=props.pastel;
  return (
    <div className="principal">
      <HeaderPresentacion/>
      <Imagen_Titulo_Precio pastel={pastel[0]}/>
      <Selecciontamaño/>
      {/* {pastel.map((info) => {
        return <FichaPasteles pastel={info} />;
      })} */}
    </div>
  );
};

export default PresentaciondelProducto;
