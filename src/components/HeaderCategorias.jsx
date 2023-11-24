// Navbar.js
import React from "react";
import "./HeaderCategorias.css"; // Importar estilos para Navbar
import Backbutton from "./BackButton";
import BotonMufin from "./BotonMufin";

const HeaderCategorias = (props) => {
  return (
    <section>
      <div className="navbar">
        <Backbutton />
        <BotonMufin />
      </div>
      <div>
        <h2 className="titulo">{props.titulo}</h2>
      </div>
    </section>
  );
};

export default HeaderCategorias;
