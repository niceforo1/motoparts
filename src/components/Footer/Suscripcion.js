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
        type="text"
        name="email"
        id="email"
        defaultValue="Dejanos tu mail, te contaremos de promociones"
      />
      {/*<input
                  type="text"
                  name="email"
                  id="email"
                  defaultValue="Dejanos tu mail, te contaremos de promociones"
                  onFocus="if (this.value == 'Dejanos tu mail, te contaremos de promociones') this.value = '';"
                  onBlur="if (this.value == '') this.value = 'Dejanos tu mail, te contaremos de promociones';"
                />*/}
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
        }}
        type="submit"
        defaultValue="Suscribirme!"
      />
    </form>

    <h4>Siguenos</h4>
    <div className="social">
      <a href="https://www.facebook.com/motoparts.2016">
        <i className="fa fa-facebook"></i>
      </a>

      <a href="https://www.instagram.com/motoparts_huincarenanco/?hl=es-la">
        <i className="fa fa-instagram"></i>
      </a>
    </div>
  </div>
);
