import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/Home';
import Brands from '../components/Brands';

function HomePage() {
  return (
    <div>
      <Header />
      <Home />
      <Brands />
      <Footer />
    </div>
  );
}

export default HomePage;
