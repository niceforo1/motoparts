import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css';
import logo from '../../images/6700_logo.png';

const Menu = () => {
  return (
    <div className="menuContainer">
      <div>
        <Link to="/">
          <img src={logo} alt="MOTOPARTS" style={{ height: '3.75em' }} />
        </Link>
      </div>
      <div className="rightMenu">
        <Link className="menuItemRight" to="/">
          Home
        </Link>

        <Link className="menuItemRight" to="/products">
          Productos
        </Link>
        <a className="menuItemRight" href="registro.php">
          Noticias
        </a>
        <a className="menuItemRight" href="cuenta_motoparts.php">
          Carrito
        </a>
      </div>
    </div>
  );
};

export default Menu;
