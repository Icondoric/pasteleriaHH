// Navbar.js
import React from "react";
import "./HeaderCategorias"; // Importar estilos para Navbar
import Backbutton from "./BackButton";
import LikeButton from "./LikeButton";

const HeaderPresentacion = (props) => {
  return (
    <section>
      <div className="navbar">
        <Backbutton />
        <LikeButton />
      </div>
    </section>
  );
};

export default HeaderPresentacion;
