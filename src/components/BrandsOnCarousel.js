import React from 'react';
import img10 from '../images/slide/2436_EBC CHICO.jpg';
import img11 from '../images/slide/8127_progrip.png';
import img12 from '../images/slide/4190_414044_preview.png';
import './brands-on-carousel.css';

function BrandsOnCarousel() {
  return (
    <div className="brands-on-carousel-container fade-in">
      <img
        src={img10}
        alt=""
        style={{
          width: '270px',
          height: '176px',
          paddingRight: '30px',
          paddingLeft: '30px',
          borderRadius: '25% 0px 0px 25%',
        }}
        className="roll-in-left"
      />
      <img
        src={img11}
        alt=""
        style={{
          width: '270px',
          height: '176px',
          paddingRight: '30px',
          paddingLeft: '30px',
        }}
        className="bounce-in-top"
      />
      <img
        src={img12}
        alt=""
        style={{
          width: '570px',
          height: '176px',
          paddingRight: '30px',
          paddingLeft: '30px',
          borderRadius: '0px 14% 14% 0px',
        }}
        className="roll-in-right"
      />
    </div>
  );
}
export default BrandsOnCarousel;
