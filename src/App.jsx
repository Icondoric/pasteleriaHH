// App.js
import React from 'react';

import PanelNavegacion from './components/PanelNavegacion';
import './App.css';
import Login from './components/template/Login';
import Registrarse from './components/template/Registrarse';
import DireccDelibery from './components/template/DireccDelibery';
import { pastel } from './assets/pastelesAPI';


const App = () => {
  return (
    <div className="app-container">
      
      <CategoriaPasteles pastel={pastel}/>
    </div>
  );
};

export default App;
