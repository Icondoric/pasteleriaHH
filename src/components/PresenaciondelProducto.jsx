// Principal.js
import React from "react";
import "./CategoriaPasteles.css";
/*import { fetchProducts } from "../assets/api";*/
import HeaderPresentacion from "./HeaderPresentacion";
import FichaPasteles from "./FichaPasteles";

const CategoriaPasteles = (props) => {
  return (
    <div className="principal">
      <HeaderPresentacion/>
      {/* {pastel.map((info) => {
        return <FichaPasteles pastel={info} />;
      })} */}
    </div>
  );
};

export default CategoriaPasteles;
