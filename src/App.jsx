// App.js
import React from 'react';
import CategoriaPasteles from './components/CategoriaPasteles'
import './App.css';
import { pastel } from './assets/pastelesAPI';

const App = () => {
  return (
    <div className="app-container">
            {/* <CategoriaMuffins infoMuffins={infoMuffins}/> */}
      <CategoriaPasteles pastel={pastel}/>
    </div>
    
    
  );
};

export default App;
