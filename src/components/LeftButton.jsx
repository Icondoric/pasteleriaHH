// LeftButton.js
import React from 'react'
import './styles/LeftButton.css'

const LeftButton = () => {
  return (
    <div className="left-button">
      <a href="/otra-ventana">
        <img src="/muffin.svg" alt="Left" />
      </a>
    </div>
  );
};

export default LeftButton;
