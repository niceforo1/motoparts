import React from 'react';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import img1 from '../images/slide/4724_87bfa06a458de2e7c3a5d56d8a3b145e.jpg';
import img2 from '../images/slide/4304_motos.jpg';
import img3 from '../images/slide/7511_maxresdefault.jpg';
import img4 from '../images/slide/8018_D4jAGpuW4AEF2vA.jpg';
import img5 from '../images/slide/4337_https___api.jpg';
import img6 from '../images/slide/5246_cortada.jpg';
import img7 from '../images/slide/3493_2012_yamaha_yzf_r1-1920x1080.jpg';
import img8 from '../images/slide/5506_7955_mc-tech.jpg';
import img9 from '../images/slide/3091_thumb-1920-751003.jpg';

import './carousel.css';

const Carousel = () => {
  const handleOnDragStart = (e) => e.preventDefault();
  return (
    <AliceCarousel
      mouseTrackingEnabled
      controlsStrategy="responsive"
      responsive={{
        1024: { items: 1 },
        768: { items: 1 },
        600: { items: 1 },
        480: { items: 1 },
      }}
      stagePadding={{ paddingTop: 150, paddingBottom: 150 }}
      buttonsDisabled={true}
      //dotsDisabled={true}
      duration={2000}
      autoPlay={true}
      autoPlayInterval={2500}
    >
      <img src={img1} onDragStart={handleOnDragStart} className="box" />
      <img src={img2} onDragStart={handleOnDragStart} className="box" />
      <img src={img3} onDragStart={handleOnDragStart} className="box" />
      <img src={img4} onDragStart={handleOnDragStart} className="box" />
      <img src={img5} onDragStart={handleOnDragStart} className="box" />
      <img src={img6} onDragStart={handleOnDragStart} className="box" />
      <img src={img7} onDragStart={handleOnDragStart} className="box" />
      <img src={img8} onDragStart={handleOnDragStart} className="box" />
      <img src={img9} onDragStart={handleOnDragStart} className="box" />
    </AliceCarousel>
  );
};

export default Carousel;
