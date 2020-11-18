import React from 'react';
import './Products.css';
import sinImagen from '../images/sin_imagen.jpg';
const categories = [
  'FUNDAS',
  'ACCESORIOS',
  'MANUBRIO',
  'PALANCAS',
  'PEDALIN',
  'TORNILLOS Y TAPAS',
  'VALVULAS',
  'VARIOS ALUMINIO',
  'CROSS',
  'ACCESORIOS VARIOS BAULES',
  'BASES BAUL',
];
const brands = [
  'ACERBIS',
  'DRC',
  'ZETA',
  'R72',
  'PROGRIP',
  'LIQUID IMAGE',
  'GIVI',
  'INTERPHONE',
  'HARDLINE',
  'JUST 1',
];

const products = [
  {
    name: 'ZETA | TAPON MOTOR CRF150R/ CRF450R/X / CRF250R - ROJO (AMPLIAR)',
    img: 'http://bycap.com.ar/admin/images/products/ze89-1120.png',
  },
  {
    name:
      'GIVI | MALETA LATERAL 37 LTS - (PAR) - NEGRO/CARBONO/AHUMADO (AMPLIAR)',
    img: 'http://bycap.com.ar/admin/images/products/v37nnt.png',
  },
  {
    name:
      'GIVI | BOLSO DEPOSITO TERMOFORMADO TANKLOCK 4 LTS - LINEA SPORT (AMPLIAR)',
    img: 'http://bycap.com.ar/admin/images/products/st602b.png',
  },
  {
    name: 'GIVI | CASCO X16 VOYAGER F - BLANCO BRILLO/NEGRO - L (AMPLIAR)',
    img: 'http://bycap.com.ar/admin/images/products/hx16fb91060.png',
  },
  {
    name: 'ACERBIS | CUBREMANO RALLY III - NEGRO (AMPLIAR)',
    img: sinImagen,
  },
  {
    name: 'GIVI | SOPORTE LATERAL HONDA VARADERO XL 1000V 03/06 (AMPLIAR)',
    img: 'http://bycap.com.ar/admin/images/products/pl170.png',
  },
  {
    name:
      'GIVI | SOPORTE TOP CASE ALUM MONOKEY BMW R1200GS ADVENTURE (14-18)  (AMPLIAR)',
    img: 'http://bycap.com.ar/admin/images/products/sra5112.png',
  },
  {
    name:
      'ACERBIS | CAMPERA RAMSEY MY VENTED 2.0 LONG NEGRO/AMARILLO- MEDIUM (AMPLIAR)',
    img: sinImagen,
  },
  {
    name: 'ACERBIS | PANTALON ADVENTURE NEGRO - XX-LARGE (AMPLIAR)',
    img: 'http://bycap.com.ar/admin/images/products/17807.090.069.png',
  },
  {
    name:
      'GIVI | PARABRISA ESPECIFICO 28X38CM (INCLUYE KIT ANCLAJE) YAMAHA MT (AMPLIAR)',
    img: 'http://bycap.com.ar/admin/images/products/a2127.png',
  },
  {
    name: 'ACERBIS | GUIAS CADENA HON-VOR - NEGRO (AMPLIAR)',
    img: sinImagen,
  },
  {
    name:
      'ACERBIS | FULL KIT PLAST. YAM YZ 250 2018 / WR250 2T 2018 - BLANCO (AMPLIAR)',
    img: sinImagen,
  },
  {
    name: 'ZETA | TAPON MOTOR CRF150R/ CRF450R/X / CRF250R - ROJO (AMPLIAR)',
    img: 'http://bycap.com.ar/admin/images/products/ze89-1120.png',
  },
  {
    name:
      'GIVI | MALETA LATERAL 37 LTS - (PAR) - NEGRO/CARBONO/AHUMADO (AMPLIAR)',
    img: 'http://bycap.com.ar/admin/images/products/v37nnt.png',
  },
  {
    name:
      'GIVI | BOLSO DEPOSITO TERMOFORMADO TANKLOCK 4 LTS - LINEA SPORT (AMPLIAR)',
    img: 'http://bycap.com.ar/admin/images/products/st602b.png',
  },
  {
    name: 'GIVI | CASCO X16 VOYAGER F - BLANCO BRILLO/NEGRO - L (AMPLIAR)',
    img: 'http://bycap.com.ar/admin/images/products/hx16fb91060.png',
  },
  {
    name: 'ACERBIS | CUBREMANO RALLY III - NEGRO (AMPLIAR)',
    img: sinImagen,
  },
  {
    name: 'GIVI | SOPORTE LATERAL HONDA VARADERO XL 1000V 03/06 (AMPLIAR)',
    img: 'http://bycap.com.ar/admin/images/products/pl170.png',
  },
  {
    name:
      'GIVI | SOPORTE TOP CASE ALUM MONOKEY BMW R1200GS ADVENTURE (14-18)  (AMPLIAR)',
    img: 'http://bycap.com.ar/admin/images/products/sra5112.png',
  },
  {
    name:
      'ACERBIS | CAMPERA RAMSEY MY VENTED 2.0 LONG NEGRO/AMARILLO- MEDIUM (AMPLIAR)',
    img: sinImagen,
  },
  {
    name: 'ACERBIS | PANTALON ADVENTURE NEGRO - XX-LARGE (AMPLIAR)',
    img: 'http://bycap.com.ar/admin/images/products/17807.090.069.png',
  },
  {
    name:
      'GIVI | PARABRISA ESPECIFICO 28X38CM (INCLUYE KIT ANCLAJE) YAMAHA MT (AMPLIAR)',
    img: 'http://bycap.com.ar/admin/images/products/a2127.png',
  },
  {
    name: 'ACERBIS | GUIAS CADENA HON-VOR - NEGRO (AMPLIAR)',
    img: sinImagen,
  },
  {
    name:
      'ACERBIS | FULL KIT PLAST. YAM YZ 250 2018 / WR250 2T 2018 - BLANCO (AMPLIAR)',
    img: sinImagen,
  },
  {
    name: 'ZETA | TAPON MOTOR CRF150R/ CRF450R/X / CRF250R - ROJO (AMPLIAR)',
    img: 'http://bycap.com.ar/admin/images/products/ze89-1120.png',
  },
  {
    name:
      'GIVI | MALETA LATERAL 37 LTS - (PAR) - NEGRO/CARBONO/AHUMADO (AMPLIAR)',
    img: 'http://bycap.com.ar/admin/images/products/v37nnt.png',
  },
  {
    name:
      'GIVI | BOLSO DEPOSITO TERMOFORMADO TANKLOCK 4 LTS - LINEA SPORT (AMPLIAR)',
    img: 'http://bycap.com.ar/admin/images/products/st602b.png',
  },
  {
    name: 'GIVI | CASCO X16 VOYAGER F - BLANCO BRILLO/NEGRO - L (AMPLIAR)',
    img: 'http://bycap.com.ar/admin/images/products/hx16fb91060.png',
  },
  {
    name: 'ACERBIS | CUBREMANO RALLY III - NEGRO (AMPLIAR)',
    img: sinImagen,
  },
  {
    name: 'GIVI | SOPORTE LATERAL HONDA VARADERO XL 1000V 03/06 (AMPLIAR)',
    img: 'http://bycap.com.ar/admin/images/products/pl170.png',
  },
  {
    name:
      'GIVI | SOPORTE TOP CASE ALUM MONOKEY BMW R1200GS ADVENTURE (14-18)  (AMPLIAR)',
    img: 'http://bycap.com.ar/admin/images/products/sra5112.png',
  },
  {
    name:
      'ACERBIS | CAMPERA RAMSEY MY VENTED 2.0 LONG NEGRO/AMARILLO- MEDIUM (AMPLIAR)',
    img: sinImagen,
  },
  {
    name: 'ACERBIS | PANTALON ADVENTURE NEGRO - XX-LARGE (AMPLIAR)',
    img: 'http://bycap.com.ar/admin/images/products/17807.090.069.png',
  },
  {
    name:
      'GIVI | PARABRISA ESPECIFICO 28X38CM (INCLUYE KIT ANCLAJE) YAMAHA MT (AMPLIAR)',
    img: 'http://bycap.com.ar/admin/images/products/a2127.png',
  },
  {
    name: 'ACERBIS | GUIAS CADENA HON-VOR - NEGRO (AMPLIAR)',
    img: sinImagen,
  },
  {
    name:
      'ACERBIS | FULL KIT PLAST. YAM YZ 250 2018 / WR250 2T 2018 - BLANCO (AMPLIAR)',
    img: sinImagen,
  },
];

const Products = () => {
  return (
    <div className='productsPageContainer'>
      <div className='sideBarContainer'>
        {/* CADA CABECERA CON LA MISMA CLASE */}
        <div className='headerSideBarContainer'>
          <span className='headerSideBarCategory'>TODAS LAS CATEGORIAS!</span>
          <p>(Se muestran solo 10, ver todas)</p>
          {/* CADA ITEM CON LA MISMA CLASE */}
          {categories.map((item) => {
            return <div className='sideBarItem'>{item}</div>;
          })}
        </div>

        <div className='headerSideBarContainer'>
          <span className='headerSideBarCategory'>TODAS LAS MARCAS!</span>
          <p>(Se muestran solo 10, ver todas)</p>
          {brands.map((item) => {
            return <div className='sideBarItem'>{item}</div>;
          })}
        </div>
      </div>
      <div className='productsContainer'>
        <div className='productContainerHeader'>
          <span className='headerSideBarCategory'>PRODUCTOS</span>
          <span
            style={{
              paddingLeft: '1.25em',
              paddingRight: '0.5em',
              color: 'black',
              fontSize: '0.7em',
            }}
          >
            12 articulos |
          </span>
          <span style={{ color: 'red', fontSize: '0.7em' }}>
            Recuerda que debes loguearte para poder ver los precios!
          </span>
        </div>

        <div className='productItemsContainer'>
          {products.map((item) => {
            return (
              <div className='productItem'>
                <div>
                  <img src={item.img} className='productImage' />
                </div>
                <span className='productName'>{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
