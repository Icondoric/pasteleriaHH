// Navbar.js
import React from 'react';
import LeftButton from './LeftButton';
import RightButton from './RightButton';
import SearchBar from './SearchBar';
import './Navbar.css'; // Importa los estilos

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
