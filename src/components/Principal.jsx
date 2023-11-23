// Principal.js
import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import Navbar from './Navbar';
import Menu from './Menu';
import Pasteles from './Pasteles';
import './Principal.css';
import BotonCafe from './BotonCafe';
import BotonSecion from '../components/moleculas/Iniciarsecion';
import { fetchProducts } from '../assets/api';
import SinCuenta from './moleculas/SinCuenta';
import EntradaTexto from './moleculas/EntradaTexto';
import ConCuenta from './moleculas/ConCuenta';



const Principal = () => {
  const [products, setProducts] = useState([]);
  const [showPasteles, setShowPasteles] = useState(false);

  useEffect(() => {
    fetchProducts().then((data) => setProducts(data));
  }, []);

  const handleMenuClick = (menuItem) => {
    if (menuItem === 'pasteles') {
      setShowPasteles(true);
    } else {
      setShowPasteles(false);
    }
  };

  return (
    <div className="principal">
      <Navbar />
      
      <Menu onMenuClick={handleMenuClick} />
      <main>
        {!showPasteles ? (
          <ProductList products={products} />
        ) : (
          <Pasteles />
        )}
      </main>
      
      <BotonCafe>Inicia Sesión</BotonCafe>
      <BotonSecion/>
      <SinCuenta/>
      <EntradaTexto Texto="dilan puto" />
      <ConCuenta/>
      
      
     
      
    </div>
  );
};

export default Principal;
