import React from 'react';
import { Parallax, Background } from 'react-parallax';
import bgImages from '../images/separador.jpg';
import pp from '../images/widget_newsletter.jpg';

function ProductsPage() {
  return (
    <div>
      {/* -----dynamic blur-----*/}
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={bgImages}
        bgImageAlt="the bikes"
        strength={300}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '67vh',
          }}
        >
          <h2
            style={{
              textAlign: 'center',
              fontWeight: '100',
              lineHeight: '100px',
              fontSize: '100px',
              fontFamily: 'Lato',
              color: '#fff',
              textShadow: '2px 2px 0 rgba(0,0,0,0.35)',
            }}
          >
            PRODUCTOS
          </h2>
        </div>
      </Parallax>
      {/* -----dynamic blur-----*/}
    </div>
  );
}

export default ProductsPage;
