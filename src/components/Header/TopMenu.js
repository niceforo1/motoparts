import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './top-menu.css';

const TopMenu = () => {
  return (
    <div className="topMenuContainer">
      <div>
        <Link className="optionTopMenu" to="/about">
          Nosotros
        </Link>
        <a className="optionTopMenu" href="contacto.php">
          Contacto
        </a>
        <a className="optionTopMenu" href="registro.php">
          Registrate
        </a>
        <a className="optionTopMenu" href="cuenta_motoparts.php">
          Mi cuenta
        </a>
      </div>
      <div className="rightMenu">
        <a
          className="optionTopMenu"
          href="https://api.whatsapp.com/send?phone=5493585480201&&&&text=Hola%20escribo%20desde%20la%20web%20todomotos.com!"
          target="_blank"
        >
          <img
            src="https://img.icons8.com/color/48/000000/whatsapp.png"
            width="20px"
            height="20px"
          />
          3585480201
        </a>
        <span className="optionTopMenu">LR_MOTOS@HOTMAIL.COM.AR </span>
      </div>
    </div>
  );
};

export default TopMenu;
