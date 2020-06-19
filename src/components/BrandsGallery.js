import React from 'react';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import img1 from '../images/slide/9645_Flash-IPONE-Logo-NewBaseline-2015-3-1-1.jpeg';
import img2 from '../images/slide/9947_acerbis.png';
import img3 from '../images/slide/2121_givi.png';
import img4 from '../images/slide/5106_logo_5c954b1db06dd.png';
import img5 from '../images/slide/4950_brand.gif';
import img6 from '../images/slide/7931_just-1.jpg';
import img7 from '../images/slide/4192_KYT-LOGO.png';
import img8 from '../images/slide/4529_progrip.png';
import img9 from '../images/slide/1167_hardline.png';
import img10 from '../images/slide/6607_logobigblack.png';
import img11 from '../images/slide/3566_slime-compresores-y-infladores.jpg';
import img12 from '../images/slide/6031_logo-hiflofiltro-repuestosmx.png';
import img13 from '../images/slide/1187_ejeas.png';
import img14 from '../images/slide/2604_DID.jpg';
import img15 from '../images/slide/7319_castrol.jpg';
import img16 from '../images/slide/2453_0Ld4T2V-_400x400.jpg';
import img17 from '../images/slide/1167_drc_hardware_logo.jpg';
import img18 from '../images/slide/2210_zeta.jpg';
import img19 from '../images/slide/9464_vedamotors.png';
import img20 from '../images/slide/3891_redog.png';
import img21 from '../images/slide/2899_interphone.png';
import img22 from '../images/slide/4335_klondike.png';
import img23 from '../images/slide/4450_JT Sprockets prueba.png';
import img24 from '../images/slide/6353_10404_logo.jpg';
import img25 from '../images/slide/9708_TECHNOMOUSSE NOIR copie.png';
import img26 from '../images/slide/3990_onguard-logo-250x250.jpg';

const BrandsGallery = () => {
  const handleOnDragStart = (e) => e.preventDefault();
  return (
    <AliceCarousel
      mouseTrackingEnabled
      controlsStrategy="responsive"
      responsive={{
        1024: { items: 8 },
        768: { items: 4 },
        600: { items: 3 },
        480: { items: 2 },
      }}
      stagePadding={{ paddingTop: 150 }}
      buttonsDisabled={true}
      //dotsDisabled={true}
      //autoPlay={true}
      //autoPlayInterval={1000}
    >
      <img
        src={img1}
        onDragStart={handleOnDragStart}
        className="img-brand-gallery"
      />
      <img
        src={img2}
        onDragStart={handleOnDragStart}
        className="img-brand-gallery"
      />
      <img
        src={img3}
        onDragStart={handleOnDragStart}
        className="img-brand-gallery"
      />
      <img
        src={img4}
        onDragStart={handleOnDragStart}
        className="img-brand-gallery"
      />
      <img
        src={img5}
        onDragStart={handleOnDragStart}
        className="img-brand-gallery"
      />
      <img
        src={img6}
        onDragStart={handleOnDragStart}
        className="img-brand-gallery"
      />
      <img
        src={img7}
        onDragStart={handleOnDragStart}
        className="img-brand-gallery"
      />
      <img
        src={img8}
        onDragStart={handleOnDragStart}
        className="img-brand-gallery"
      />
      <img
        src={img9}
        onDragStart={handleOnDragStart}
        className="img-brand-gallery"
      />
      <img
        src={img10}
        onDragStart={handleOnDragStart}
        className="img-brand-gallery"
      />
      <img
        src={img11}
        onDragStart={handleOnDragStart}
        className="img-brand-gallery"
      />
      <img
        src={img12}
        onDragStart={handleOnDragStart}
        className="img-brand-gallery"
      />
      <img
        src={img13}
        onDragStart={handleOnDragStart}
        className="img-brand-gallery"
      />
      <img
        src={img14}
        onDragStart={handleOnDragStart}
        className="img-brand-gallery"
      />
      <img
        src={img15}
        onDragStart={handleOnDragStart}
        className="img-brand-gallery"
      />
      <img
        src={img16}
        onDragStart={handleOnDragStart}
        className="img-brand-gallery"
      />
      <img
        src={img17}
        onDragStart={handleOnDragStart}
        className="img-brand-gallery"
      />
      <img
        src={img18}
        onDragStart={handleOnDragStart}
        className="img-brand-gallery"
      />
      <img
        src={img19}
        onDragStart={handleOnDragStart}
        className="img-brand-gallery"
      />
      <img
        src={img20}
        onDragStart={handleOnDragStart}
        className="img-brand-gallery"
      />
      <img
        src={img21}
        onDragStart={handleOnDragStart}
        className="img-brand-gallery"
      />
      <img
        src={img22}
        onDragStart={handleOnDragStart}
        className="img-brand-gallery"
      />
      <img
        src={img23}
        onDragStart={handleOnDragStart}
        className="img-brand-gallery"
      />
      <img
        src={img24}
        onDragStart={handleOnDragStart}
        className="img-brand-gallery"
      />
      <img
        src={img25}
        onDragStart={handleOnDragStart}
        className="img-brand-gallery"
      />
      <img
        src={img26}
        onDragStart={handleOnDragStart}
        className="img-brand-gallery"
      />
    </AliceCarousel>
  );
};

export default BrandsGallery;
