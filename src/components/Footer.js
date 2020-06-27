import React, { Component } from 'react';
import Direccion from './Footer/Direccion';
import NuestraWeb from './Footer/NuestraWeb';
import NuestraHistoria from './Footer/NuestraHistoria';
import Suscripcion from './Footer/Suscripcion';
import Copyright from './Footer/Copyright';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <Direccion />
          <NuestraWeb />
          <NuestraHistoria />
          <Suscripcion />
        </div>
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;
