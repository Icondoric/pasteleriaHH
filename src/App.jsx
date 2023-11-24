// App.js
import React from 'react';
import './App.css';
import Tigo from './components/Tigo';
import TarjTigom from './components/TarjTigom';

const App = () => {
  return (
    <div className="app-container">
      <Tigo/>
      <TarjTigom/>
    </div>
  );
};

export default App;
