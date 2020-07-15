import React from 'react';
import Home from '../components/Home';
import BrandsGallery from '../components/BrandsGallery';

function HomePage() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
        minHeight: '720px',
      }}
    >
      <Home />
      <BrandsGallery />
    </div>
  );
}

export default HomePage;
