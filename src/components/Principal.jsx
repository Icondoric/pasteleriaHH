// Principal.js
import React from 'react';
import Navbar from './Navbar';
import Menu from './Menu';
import Destacados from './Destacados';
import './styles/Principal.css';
import {postredestacado} from '../assets/DestacadosAPI';

const Principal = () => {
  
  return (
    <div className="principal">
      <Navbar />
      <Menu />
      <Destacados postredestacado = {postredestacado}/>
    </div>
  );
};

export default Principal;