import React from "react";
import "./CategoriaDonas.css";
import HeaderCategorias from "./HeaderCategorias";
import FichaDonas from "./FichaDonas";

const CategoriaDonas = (props) => {
  const infodonas = props.infodonas;
  return (
    <div className="principal">
      <HeaderCategorias>
        Donas
      </HeaderCategorias>
      {infodonas.map((info) => {
        return <FichaDonas infodonas={info} />;
      })}
    </div>
  );
};

export default CategoriaDonas;
