// Navbar.js
import React from "react";
import "./LeftButton.css"; // Importar estilos para LeftButton
import "./RightButton.css"; // Importar estilos para RightButton
import "./HeaderCategorias.css"; // Importar estilos para Navbar
import Backbutton from "./BackButton";
import BotonMufin from "./BotonMufin";

const HeaderCategorias = () => {
  return (
    <section>
      <div className="navbar">
        <Backbutton />
        <BotonMufin />
      </div>
      <div>
        <h2 className="titulo">Pasteles</h2>
      </div>
    </section>
  );
};

export default HeaderCategorias;
