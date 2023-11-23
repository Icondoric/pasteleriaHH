// App.js
import React from 'react';
import './App.css';
import TarjetaCredito from './components/TarjetaCredito';
import InformacionTarj from './components/InformacionTarj';

const App = () => {
  return (
    <div className="app-container">
      <TarjetaCredito/>
      <InformacionTarj/>
    </div>
  );
};

export default App;
