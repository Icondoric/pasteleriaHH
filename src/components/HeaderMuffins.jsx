import React from "react";
import "./LeftButton.css"; // Importar estilos para LeftButton
import "./RightButton.css"; // Importar estilos para RightButton
import "./HeaderCategorias.css"; // Importar estilos para Navbar
import Backbutton from "./Atomos/BackButton";
import BotonMufin from "./Atomos/BotonMufin";

const HeaderMuffins = () => {
  return (
    <section>
      <div className="navbar">
        <Backbutton />
        <BotonMufin />
      </div>
      <div>
        <h2 className="titulo">ChescoMuffins</h2>
      </div>
    </section>
  );
};

export default HeaderMuffins;
