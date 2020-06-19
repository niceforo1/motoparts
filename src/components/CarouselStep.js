import React from 'react';
const CarouselStep = (props) => (
  <div>
    <img src={props.imageStep} alt="" />
    <p
      className="legend"
      style={{ display: 'flex', justifyContent: 'space-evenly' }}
    >
      <img
        src={props.imgLegend1}
        alt=""
        style={{ width: '270px', height: '176px' }}
      />
      <img
        src={props.imgLegend2}
        alt=""
        style={{ width: '270px', height: '176px' }}
      />
      <img
        src={props.imgLegend3}
        alt=""
        style={{ width: '570px', height: '176px' }}
      />
    </p>
  </div>
);

export default CarouselStep;
