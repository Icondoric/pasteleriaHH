// App.js
import React from 'react';

import PanelNavegacion from './components/PanelNavegacion';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
            {/* <CategoriaMuffins infoMuffins={infoMuffins}/> */}
      <CategoriaPasteles pastel={pastel}/>
    </div>
  );
};

export default App;
