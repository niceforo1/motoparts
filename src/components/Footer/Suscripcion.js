import React from 'react';
import './suscripcion.css';
export default () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      width: '25%',
    }}
  >
    <div
      style={{
        fontStyle: 'normal',
        fontFamily: 'Lato',
        fontWeight: '900',
        fontSize: '1.5em',
        color: '#fff',
      }}
    >
      Suscripcion
    </div>
    <form
      action="procesar_newsletter.php?procesar=1"
      method="post"
      encType="multipart/form-data"
    >
      <input
        style={{
          width: '100%',
          height: '40px',
          margin: '0 6px 10px 0',
          padding: '10px',
          textTransform: 'none',
          fontFamily: 'Lato',
          fontWeight: '400',
          lineHeight: '20px',
          fontSize: '11px',
          color: '#666',
          fontStyle: 'normal',
          borderRadius: '0',
          background: '#fff',
          border: '2px solid #e9e9e9',
          boxShadow: 'none',
          transition: 'all 0.3s ease-in-out',
        }}
        type="text"
        name="email"
        id="email"
        defaultValue="Dejanos tu mail, te contaremos de promociones"
      />
    </form>
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '2em',
      }}
    >
      <div>
        <p
          style={{
            fontWeight: '900',
            color: '#fff',
            textTransform: 'uppercase',
          }}
        >
          Siguenos
        </p>
        <div className="social">
          <a href="https://www.facebook.com/motoparts.2016">
            <i className="fa fa-facebook"></i>
          </a>

          <a href="https://www.instagram.com/motoparts_huincarenanco/?hl=es-la">
            <i className="fa fa-instagram"></i>
          </a>
        </div>
      </div>
      <input
        style={{
          margin: '0',
          padding: '10px 52px',
          fontFamily: 'Lato',
          textTransform: 'uppercase',
          fontWeight: '900',
          fontStyle: 'normal',
          lineHeight: '20px',
          fontSize: '14px',
          color: '#fff',
          borderRadius: '0',
          background: '#434343',
          border: '0',
          boxShadow: 'none',
          alignSelf: 'end',
        }}
        type="submit"
        defaultValue="Suscribirme!"
        value="Suscribirme!"
      />
    </div>
  </div>
);
