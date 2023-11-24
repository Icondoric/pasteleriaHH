// App.js
import React from 'react';
import CategoriaPasteles from './components/CategoriaPasteles'
import './App.css';
import { pastel } from './assets/pastelesAPI';
import PresentaciondelProducto from './components/PresenaciondelProducto';

const App = () => {
  return (
    <div className="app-container">
      <CategoriaPasteles pastel={pastel}/>
    </div>
  );
};

export default App;
