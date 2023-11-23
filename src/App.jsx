// App.js
import React from 'react';
import './App.css';
import CategoriaMuffins from './components/CategoriaMuffins';
import { infoMuffins } from './assets/muffinsApi';

const App = () => {
  return (
    <div className="app-container">
      <CategoriaMuffins infoMuffins={infoMuffins}/>
    </div>
    
    
  );
};

export default App;
