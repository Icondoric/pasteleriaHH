import React from "react";
import "./CategoriaMuffins.css";
import HeaderCategorias from "./HeaderCategorias";
import MuffinSection from "./MuffinsSection";

const CategoriaMuffins = (props) => {
  const infoMuffins = props.infoMuffins;
  return (
    <div className="principal">
      <HeaderCategorias>
        Muffins
      </HeaderCategorias>
      {infoMuffins.map((info) => {
        return <MuffinSection infoMuffins={info} />;
      })}
    </div>
  );
};

export default CategoriaMuffins;