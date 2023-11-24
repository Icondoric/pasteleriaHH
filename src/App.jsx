// App.js
import React from 'react'
import {Routes, Route, Outlet, Link} from 'react-router-dom'
import PanelNavegacion from './components/PanelNavegacion'
import './App.css'
import Login from './components/template/Login'
import Menu from './components/Menu'
import Principal from './components/Principal'



const App = () => {
  return (
    <div className="app-container">
    <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/principal' element = {<Principal />}/>
        <Route path='menu-pasteles' element = {<Menu />} />
        <Route path='menu-muffins' element = {<Menu />} />
        <Route path='menu-donas' element = {<Menu />} />
        <Route path='menu-panes' element = {<Menu />} />
    </Routes> 
    </div>
  );
};

export default App;
