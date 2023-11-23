// Pasteles.js
import React from 'react';
import Navbar from './Navbar'; // Importa el componente Navbar

const Pasteles = () => {
  return (
    <div>
      <Navbar /> {/* Reutiliza el Navbar dentro de Pasteles */}
      <h2>¡Bienvenido a la sección de Pasteles!</h2>
      {/* Agrega el contenido de la sección de Pasteles aquí */}
    </div>
  );
};

export default Pasteles;
