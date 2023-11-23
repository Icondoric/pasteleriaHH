import React, { useState, useEffect } from "react";
import "./CategoriaMuffins.css";
/*import { fetchProducts } from "../assets/api";*/
import HeaderCategorias from "./HeaderCategorias";
import MuffinSection from "./MuffinsSection";

const CategoriaMuffins = (props) => {
  const infoMuffins = props.infoMuffins;
  return (
    <div className="principal">
      <HeaderCategorias />
      {infoMuffins.map((info) => {
        return <MuffinSection infoMuffins={info} />;
      })}
    </div>
  );
};

export default CategoriaMuffins;