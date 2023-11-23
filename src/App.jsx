// App.js
import React from 'react';
import CategoriaPasteles from './components/CategoriaPasteles'
import './App.css';
import { pastel } from './assets/pastelesAPI';

const App = () => {
  return (
    <div className="app-container">
           
      <CategoriaPasteles pastel={pastel}/>
       {/* <CategoriaMuffins infoMuffins={infoMuffins}/> */}
    </div>
    
    
  );
};

export default App;
