// Principal.js
import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import Navbar from './Navbar';
import './Principal.css'; // Importa los estilos

import { fetchProducts } from '../assets/api';

const Principal = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Llamada a la API para obtener la lista de productos
    fetchProducts().then((data) => setProducts(data));
  }, []);

  return (
    <div className="principal">
      {/* Elimina la referencia al componente Header */}
      <Navbar />
      <main>
        <ProductList products={products} />
      </main>
    </div>
  );
};

export default Principal;
