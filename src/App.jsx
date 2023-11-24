// App.js
import React from 'react';

import PanelNavegacion from './components/PanelNavegacion';
import './App.css';
import Login from './components/template/Login';
import Registrarse from './components/template/Registrarse';
import DireccDelibery from './components/template/DireccDelibery';


const App = () => {
  return (
    <div className="app-container">
      
      <Registrarse/>
    </div>
  );
};

export default App;
