import React from "react"
import "./styles/Menu.css"
import {Link} from 'react-router-dom'

const Menu = () => {
  return (
    <div className="menu">
    <Link to='/menu-pasteles' >
      <div>
        <img src="/pasteles.svg" alt="Pasteles" />
      </div>
    </Link>

    <Link to = '/menu-muffins'>
      <div>
        <img src="/chesco.svg" alt="ChescoMufins" />
      </div>
    </Link>

    <Link to = '/menu-donas'>
      <div>
        <img src="/donas.svg" alt="Donas" />
      </div>
    </Link>
    
    <Link to = 'menu-panes'>
      <div>
        <img src="/marrana.svg" alt="Panes" />
      </div>
    </Link>
    </div>
  );
};

export default Menu;
