// Navbar.js
import React from 'react';
import LeftButton from './LeftButton';
import RightButton from './RightButton';
import SearchBar from './SearchBar';
import './LeftButton.css'; // Importar estilos para LeftButton
import './RightButton.css'; // Importar estilos para RightButton
import './Navbar.css'; // Importar estilos para Navbar

const Navbar = () => {
  return (
    <div className="navbar">
      <LeftButton />
      <RightButton />
      <SearchBar />
    </div>
  );
};

export default Navbar;
