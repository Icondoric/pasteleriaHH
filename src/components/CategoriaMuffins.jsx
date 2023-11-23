import React, { useState, useEffect } from "react";
import "./CategoriaMuffins.css";
import HeaderMuffins from "./HeaderMuffins";
import MuffinSection from "./MuffinsSection";

const CategoriaMuffins = (props) => {
  const infoMuffins = props.infoMuffins;
  return (
    <div className="principal">
      <HeaderMuffins />
      {infoMuffins.map((info) => {
        return <MuffinSection infoMuffins={info} />;
      })}
    </div>
  );
};

export default CategoriaMuffins;