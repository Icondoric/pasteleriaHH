// SearchBar.js
import React from 'react';
import './styles/SearchBar.css'; // Importa los estilos

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Buscar..." />
    </div>
  );
};

export default SearchBar;
