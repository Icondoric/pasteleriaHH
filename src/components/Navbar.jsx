// Navbar.js
import React from 'react';
import LeftButton from '../components/LeftButton';
import RightButton from '../components/RightButton';
import SearchBar from '../components/SearchBar';
import './styles/LeftButton.css'; 
import './styles/RightButton.css';
import './styles/Navbar.css'; 

const Navbar = () => {
  return (
    <div className="navbar">
      <LeftButton />
      <RightButton />
      <SearchBar />
    </div>
  );
};

export default Navbar;
