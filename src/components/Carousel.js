import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import CarouselStep from './CarouselStep';

import img1 from '../images/slide/4724_87bfa06a458de2e7c3a5d56d8a3b145e.jpg';
import img2 from '../images/slide/4304_motos.jpg';
import img3 from '../images/slide/7511_maxresdefault.jpg';
import img4 from '../images/slide/8018_D4jAGpuW4AEF2vA.jpg';
import img5 from '../images/slide/4337_https___api.jpg';
import img6 from '../images/slide/5246_cortada.jpg';
import img7 from '../images/slide/3493_2012_yamaha_yzf_r1-1920x1080.jpg';
import img8 from '../images/slide/5506_7955_mc-tech.jpg';
import img9 from '../images/slide/3091_thumb-1920-751003.jpg';
import img10 from '../images/slide/2436_EBC CHICO.jpg';
import img11 from '../images/slide/8127_progrip.png';
import img12 from '../images/slide/4190_414044_preview.png';

const MyCarrousel = () => (
  <Carousel
    autoPlay
    showThumbs={false}
    axis="vertical"
    infiniteLoop={true}
    interval={3000}
    verticalSwipe="standard"
  >
    <CarouselStep
      imageStep={img1}
      imgLegend1={img10}
      imgLegend2={img11}
      imgLegend3={img12}
    />
    <CarouselStep
      imageStep={img2}
      imgLegend1={img10}
      imgLegend2={img11}
      imgLegend3={img12}
    />
    <CarouselStep
      imageStep={img3}
      imgLegend1={img10}
      imgLegend2={img11}
      imgLegend3={img12}
    />
    <CarouselStep
      imageStep={img4}
      imgLegend1={img10}
      imgLegend2={img11}
      imgLegend3={img12}
    />
    <CarouselStep
      imageStep={img5}
      imgLegend1={img10}
      imgLegend2={img11}
      imgLegend3={img12}
    />
    <CarouselStep
      imageStep={img6}
      imgLegend1={img10}
      imgLegend2={img11}
      imgLegend3={img12}
    />
    <CarouselStep
      imageStep={img7}
      imgLegend1={img10}
      imgLegend2={img11}
      imgLegend3={img12}
    />
    <CarouselStep
      imageStep={img8}
      imgLegend1={img10}
      imgLegend2={img11}
      imgLegend3={img12}
    />
    <CarouselStep
      imageStep={img9}
      imgLegend1={img10}
      imgLegend2={img11}
      imgLegend3={img12}
    />
  </Carousel>
);
export default MyCarrousel;
