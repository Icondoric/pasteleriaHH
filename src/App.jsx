// App.js
import React from 'react';
import CategoriaDonas from './components/CategoriaDonas'
import './App.css';
import { infodonas } from './assets/donasAPI';

const App = () => {
  return (
    <div className="app-container">
      <CategoriaDonas infodonas={infodonas}/>
    </div>
    
    
  );
};

export default App;
