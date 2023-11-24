// Menu.js
import React from "react";
import "./styles/Menu.css"; // Importa los estilos

const Menu = () => {
  return (
    <div className="menu">
      <div onClick={() => handleMenuClick("pasteles")}>
        <img src="/pasteles.svg" alt="Pasteles" />
      </div>
      <div onClick={() => (window.location.href = "/chescomufins")}>
        <img src="/chesco.svg" alt="ChescoMufins" />
      </div>
      <div onClick={() => (window.location.href = "/donas")}>
        <img src="/donas.svg" alt="Donas" />
      </div>
      <div onClick={() => (window.location.href = "/panes")}>
        <img src="/marrana.svg" alt="Panes" />
      </div>
    </div>
  );
};

export default Menu;
