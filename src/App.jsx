// App.js
import React from 'react'
import {Routes, Route, Outlet, Link} from 'react-router-dom'
import PanelNavegacion from './components/PanelNavegacion'
import './App.css'
import Login from './components/template/Login'
import Registrarse from './components/template/Registrarse'
import DireccDelibery from './components/template/DireccDelibery'
import Principal from './components/Principal'


const App = () => {
  return (
    <div className="app-container">
    <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/principal' element = {<Principal />}/>
    </Routes> 
    </div>
  );
};

export default App;
