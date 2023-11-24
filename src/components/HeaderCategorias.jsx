// Navbar.js
import React from "react";
import "./styles/LeftButton.css"
import "./styles/RightButton.css"
import "./HeaderCategorias.css"
import Backbutton from "./BackButton"
import BotonMufin from "./BotonMufin"
import {Link} from 'react-router-dom'

const HeaderCategorias = ({children}) => {
  return (
    <section>
      <div className="navbar">
        <Link to='/atras'>
          <Backbutton />
        </Link>

        <BotonMufin />
      </div>
      <div>
        <h2 className="titulo">{children}</h2>
      </div>
    </section>
  );
};

export default HeaderCategorias;
