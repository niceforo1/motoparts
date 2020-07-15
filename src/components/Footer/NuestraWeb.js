import React from 'react';

export default () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      width: '10%',
    }}
  >
    <span
      style={{
        fontStyle: 'normal',
        fontFamily: 'Lato',
        fontWeight: '900',
        fontSize: '1.5em',
        color: '#fff',
      }}
    >
      Nuestra Web
    </span>
    <p style={{ fontFamily: 'Lato', fontSize: '1.25em' }}>
      <a href="nosotros.php">Nosotros</a>
    </p>
    <p style={{ fontFamily: 'Lato', fontSize: '1.25em' }}>
      <a href="como_comprar.php">Como comprar</a>
    </p>
    <p style={{ fontFamily: 'Lato', fontSize: '1.25em' }}>
      <a href="noticias.php">Noticias</a>
    </p>
    <p style={{ fontFamily: 'Lato', fontSize: '1.25em' }}>
      <a href="productos.php">Nuestros productos</a>
    </p>
    <p style={{ fontFamily: 'Lato', fontSize: '1.25em' }}>
      <a href="productos_marcas.php">Marcas</a>
    </p>
    <p style={{ fontFamily: 'Lato', fontSize: '1.25em' }}>
      <a href="contacto.php">Contacto</a>
    </p>
  </div>
);
