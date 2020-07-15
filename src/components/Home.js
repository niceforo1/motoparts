import React from 'react';
import Carousel from './Carousel';
import BrandsOnCarousel from './BrandsOnCarousel';

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
      <BrandsOnCarousel />
    </div>
  );
}

export default Home;
