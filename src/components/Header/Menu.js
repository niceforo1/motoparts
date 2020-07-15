import React from 'react';
import './menu.css';
import logo from '../../images/6700_logo.png';

const Menu = () => {
  return (
    <div className="menuContainer">
      <div>
        <a href="index.php">
          <img src={logo} alt="MOTOPARTS" style={{ height: '3.75em' }} />
        </a>
      </div>
      <div className="rightMenu">
        <a className="menuItemRight" href="nosotros.php">
          Home
        </a>
        <a className="menuItemRight" href="contacto.php">
          Productos
        </a>
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
