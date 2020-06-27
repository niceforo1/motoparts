import React from 'react';

const Direccion = () => {
  return (
    <div className="col-lg-2 col-md-2 col-sm-3 col-xs-6 col-ss-12 padbot30">
      <div className="foot_phone">
        <a href="">DIRECCION</a>
      </div>
      Santa Fe 96 - Huinca Renancó - Córdoba - CP 6270
      <div className="foot_phone">
        <a href="mailto:LR_MOTOS@HOTMAIL.COM.AR">EMAIL</a>
      </div>
      LR_MOTOS@HOTMAIL.COM.AR
      <div className="foot_phone">
        <a
          href="https://api.whatsapp.com/send?phone=5493585480201&&&&text=Hola%20escribo%20desde%20la%20web%20todomotos.com!"
          target="_blank"
        >
          WHATSAPP 3585480201
        </a>
      </div>
    </div>
  );
};

export default Direccion;
