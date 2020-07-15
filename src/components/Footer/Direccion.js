import React from 'react';

const Direccion = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '20%',
      }}
    >
      <div style={{ marginBottom: '1.5em', width: '100%' }}>
        <span
          style={{
            fontStyle: 'normal',
            fontFamily: 'Lato',
            fontWeight: '900',
            fontSize: '1.5em',
            color: '#fff',
          }}
        >
          DIRECCION
        </span>
        <p style={{ fontFamily: 'Lato', fontSize: '1.25em' }}>
          Santa Fe 96 - Huinca Renancó - Córdoba - CP 6270
        </p>
      </div>
      <div style={{ marginBottom: '1.5em', width: '100%' }}>
        <span
          style={{
            fontStyle: 'normal',
            fontFamily: 'Lato',
            fontWeight: '900',
            fontSize: '1.5em',
            color: '#fff',
          }}
        >
          EMAIL
        </span>
        <p style={{ fontFamily: 'Lato', fontSize: '1.25em' }}>
          <a href="mailto:LR_MOTOS@HOTMAIL.COM.AR">LR_MOTOS@HOTMAIL.COM.AR</a>
        </p>
      </div>
      <div style={{ marginBottom: '1.5em', width: '100%' }}>
        <div
          style={{
            fontStyle: 'normal',
            fontFamily: 'Lato',
            fontWeight: '900',
            fontSize: '1.5em',
            color: '#fff',
          }}
        >
          WHATSAPP
        </div>
        <div style={{ fontFamily: 'Lato', fontSize: '1.25em' }}>
          <img
            src="https://img.icons8.com/color/48/000000/whatsapp.png"
            style={{ width: '1.5em', height: '1.5em', marginRight: '0.55em' }}
          />

          <a
            href="https://api.whatsapp.com/send?phone=5493585480201&&&&text=Hola%20escribo%20desde%20la%20web%20todomotos.com!"
            target="_blank"
          >
            3585480201
          </a>
        </div>
      </div>
    </div>
  );
};

export default Direccion;
