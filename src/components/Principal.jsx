// Principal.js
import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import Navbar from './Navbar';
import Menu from './Menu';
import Destacados from './Destacados';
import './styles/Principal.css';
import BotonCafe from './BotonCafe';
import SinCuenta from './SinCuenta';
import EntradaTexto from './EntradaTexto';
import ConCuenta from './ConCuenta';



const Principal = () => {
  
  return (
    <div className="principal">
      <Navbar />
      <Menu />
      <BotonCafe>Inicia Sesión</BotonCafe>
      <SinCuenta/>
      <EntradaTexto Texto="dil" />
      <ConCuenta/> 
    </div>
  );
};

export default Principal;