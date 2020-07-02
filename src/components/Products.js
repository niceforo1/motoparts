import React from 'react';

const Products = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '100%',
        //        height: '53vh',
        backgroundColor: 'white',
      }}
    >
      <div
        style={{
          backgroundColor: 'red',
          //          height: '53vh',
          width: '15%',
        }}
      >
        TODAS LAS CATEGORIAS! <br />
        (Se muestran solo 10, ver todas ) <br />
        <br />
        FUNDAS
        <br />
        ACCESORIOS <br />
        MANUBRIO <br />
        PALANCAS <br />
        PEDALIN <br />
        TORNILLOS Y TAPAS <br />
        VALVULAS <br />
        VARIOS ALUMINIO <br />
        CROSS <br />
        ACCESORIOS VARIOS BAULES <br />
        BASES BAUL
        <br />
        <br />
        <br />
        TODAS LAS MARCAS!
        <br />
        (Se muestran solo 10, ver todas )
        <br />
        <br />
        ACERBIS <br />
        DRC <br />
        ZETA <br />
        R72 <br />
        PROGRIP <br />
        LIQUID IMAGE <br />
        GIVI <br />
        INTERPHONE <br />
        HARDLINE <br />
        JUST 1 <br />
        <br />
      </div>
      <div
        style={{
          backgroundColor: 'blue',
          //          height: '53vh',
          width: '60%',
        }}
      >
        caja2
      </div>
    </div>
  );
};

export default Products;
