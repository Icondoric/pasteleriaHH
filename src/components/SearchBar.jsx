// SearchBar.js
import React from 'react';
import '../components/styles/SearchBar'; // Importa los estilos

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Buscar..." />
    </div>
  );
};

export default SearchBar;
