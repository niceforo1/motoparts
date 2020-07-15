import React from 'react';
import Carousel from './Carousel';
import img10 from '../images/slide/2436_EBC CHICO.jpg';
import img11 from '../images/slide/8127_progrip.png';
import img12 from '../images/slide/4190_414044_preview.png';

function Home() {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Carousel />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          zIndex: 30,
          left: '50%',
          right: 0,
          bottom: '350px',
          margin: '0 -15px',
          backgroundColor: 'red',
          width: '50px',
          height: '50px',
        }}
      >
        <img src={img10} alt="" style={{ width: '270px', height: '176px' }} />
        <img src={img11} alt="" style={{ width: '270px', height: '176px' }} />
        <img src={img12} alt="" style={{ width: '570px', height: '176px' }} />
      </div>
    </div>
  );
}

export default Home;
