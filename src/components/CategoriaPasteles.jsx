// Principal.js
import React from "react";
import "./CategoriaPasteles.css";
import HeaderCategorias from "./HeaderCategorias";
import FichaPasteles from "./FichaPasteles";

const CategoriaPasteles = (props) => {
  const pastel = props.pastel;
  const nuevoTitulo="Pasteles";
  return (
    <div className="principal">
      <HeaderCategorias titulo={nuevoTitulo}/>
      {pastel.map((info) => {
        return <FichaPasteles pastel={info} />;
      })}
    </div>
  );
};

export default CategoriaPasteles;
