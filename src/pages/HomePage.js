import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/Home';
import Brands from '../components/Brands';

function HomePage() {
  return (
    <React.Fragment>
      <Home />
      <Brands />
    </React.Fragment>
  );
}

export default HomePage;
