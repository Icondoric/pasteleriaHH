// App.js
import React from 'react';
//import Principal from './components/Principal';
import './App.css';
import Login from './components/template/Login';
import Registrarse from './components/template/Registrarse';
import DireccDelibery from './components/template/DireccDelibery';
import Bienvenida from './components/template/Bienvenida';
import { BrowserRouter, Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <div className="app-container">
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element ={<Bienvenida/>}></Route>
        <Route path='Login' element ={<Login/>}></Route>
        <Route path='Registro' element ={<Registrarse/>}></Route>
        <Route path='Direccion' element ={<DireccDelibery/>}></Route>
        
      </Routes>
      </BrowserRouter>
      
    </div>
    
    
  );
};

export default App;

