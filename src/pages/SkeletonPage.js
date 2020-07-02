import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function SkeletonPage(props) {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

export default SkeletonPage;
