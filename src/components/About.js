import React from 'react';
import img1 from '../images/secciones/8695_TonusSat_MXGP_10_RUS_2017.jpg';
import './about.css';
const About = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '60%',
      }}
    >
      <div class="aboutTitle">
        <span class="headerSideBarCategory">QUIENES SOMOS</span>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <div
          style={{
            paddingRight: '5em',
            width: '50%',
          }}
        >
          <h3 style={{ fontFamily: 'Lato' }}>Motoparts Huinca Renancó</h3>
          <span style={{ fontFamily: 'Lato' }}>
            SOMOS UNA EMPRESA DEDICADA A LA VENTA Y DISTRIBUCIÓN DE REPUESTOS
            IMPORTADOS Y NACIONALES, ACCESORIOS E INDUMENTARIA PARA MOTOCICLISMO
            EN TODAS SUS CATEGORÍAS, CONTAMOS CON LA REPRESENTACIÓN EXCLUSIVA DE
            GRANDES MARCAS A NIVEL MUNDIAL COMO LO SON: FOX, REV'ÌT, SHARK, KYT
            HELMETS, HELD, MOTORMAN, BRENTA BRAKES, ACERBIS, GIVI, JUST1
            HELMETS, EBC BRAKES, HARDLINE, PROGRIP, DRC ZETA JAPÓN, TECHNO
            MOUSSE, HIFLOFILTRO, JT SPROCKETS, IPONE, CASTROL Y MOTUL.
          </span>
        </div>
        <div style={{ width: '50%' }}>
          <img src={img1} alt="" style={{ width: '100%' }} />
        </div>
      </div>
    </div>
  );
};

export default About;
