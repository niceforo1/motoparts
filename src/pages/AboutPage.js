import React from 'react';
import About from '../components/About';

function AboutPage() {
  return (
    <div
      style={{
        marginTop: '16vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        marginBottom: '3em',
        paddingTop: '2em',
      }}
    >
      <About />
    </div>
  );
}

export default AboutPage;
