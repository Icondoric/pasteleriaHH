// Principal.js
import React, { useState, useEffect } from "react";
import "./CategoriaDonas.css";
/*import { fetchProducts } from "../assets/api";*/
import HeaderCategorias from "./HeaderCategorias";
import FichaDonas from "./FichaDonas";

const CategoriaDonas = (props) => {
  const infodonas = props.infodonas;
  return (
    <div className="principal">
      <HeaderCategorias />
      {infodonas.map((info) => {
        return <FichaDonas infodonas={info} />;
      })}
    </div>
  );
};

export default CategoriaDonas;

/*const [products, setProducts] = useState([]);
  const [showPasteles, setShowPasteles] = useState(false);

  useEffect(() => {
    fetchProducts().then((data) => setProducts(data));
  }, []);

  const handleMenuClick = (menuItem) => {
    if (menuItem === 'pasteles') {
      setShowPasteles(true);
    } else {
      setShowPasteles(false);
    }
  };
*/
