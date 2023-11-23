// Principal.js
import React, { useState, useEffect } from "react";
import "./CategoriaPasteles.css";
/*import { fetchProducts } from "../assets/api";*/
import HeaderCategorias from "./HeaderCategorias";
import FichaPasteles from "./FichaPasteles";

const CategoriaPasteles = (props) => {
  const pastel = props.pastel;
  return (
    <div className="principal">
      <HeaderCategorias />
      {pastel.map((info) => {
        return <FichaPasteles pastel={info} />;
      })}
    </div>
  );
};

export default CategoriaPasteles;

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
