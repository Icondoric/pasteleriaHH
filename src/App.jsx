// App.js
import React from 'react'
import {Routes, Route, Outlet, Link} from 'react-router-dom'
import './App.css'
import Login from './components/template/Login'
import Menu from './components/Menu'
import Principal from './components/Principal'
import CategoriaPasteles from './components/CategoriaPasteles'
import CategoriaMuffins from './components/CategoriaMuffins'
import CategoriaDonas from './components/CategoriaDonas'
import {infoMuffins} from './assets/muffinsApi'
import {pastel} from './assets/pastelesAPI'
import {infodonas} from './assets/donasAPI'


const App = () => {
  return (
    <div className="app-container">
    <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/principal' element = {<Principal />}/>
        <Route path='/menu-pasteles' element = {<CategoriaPasteles pastel={pastel}/>} />
        <Route path='/menu-muffins' element = {<CategoriaMuffins infoMuffins = {infoMuffins}/>} />
        <Route path='/menu-donas' element = {<CategoriaDonas infodonas = {infodonas}/>} />
        <Route path='/menu-panes' element = {<Menu />} /> 
        <Route path='/atras' element = {<Principal />}/>
    </Routes> 
    </div>
  );
};

export default App;
