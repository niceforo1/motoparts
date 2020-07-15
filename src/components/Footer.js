import React, { Component } from 'react';
import Direccion from './Footer/Direccion';
import NuestraWeb from './Footer/NuestraWeb';
import NuestraHistoria from './Footer/NuestraHistoria';
import Suscripcion from './Footer/Suscripcion';
import Copyright from './Footer/Copyright';
import './footer.css';
const Footer = () => {
  return (
    <footer>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginLeft: '10em',
          marginRight: '10em',
        }}
      >
        <Direccion />
        <NuestraWeb />
        <NuestraHistoria />
        <Suscripcion />
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;
