import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function SkeletonPage(props) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

export default SkeletonPage;
