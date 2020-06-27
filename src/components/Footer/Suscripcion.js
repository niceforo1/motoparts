import React from 'react';

export default () => (
  <div className="col-lg-4 col-md-4 padbot30">
    <h4>Suscripcion</h4>
    <form
      action="procesar_newsletter.php?procesar=1"
      method="post"
      encType="multipart/form-data"
    >
      <input
        type="text"
        name="email"
        id="email"
        defaultValue="Dejanos tu mail, te contaremos de promociones"
      />
      {/*<input
                  type="text"
                  name="email"
                  id="email"
                  defaultValue="Dejanos tu mail, te contaremos de promociones"
                  onFocus="if (this.value == 'Dejanos tu mail, te contaremos de promociones') this.value = '';"
                  onBlur="if (this.value == '') this.value = 'Dejanos tu mail, te contaremos de promociones';"
                />*/}
      <input
        className="btn newsletter_btn"
        type="submit"
        defaultValue="Suscribirme!"
      />
    </form>

    <h4>Siguenos</h4>
    <div className="social">
      <a href="https://www.facebook.com/motoparts.2016">
        <i className="fa fa-facebook"></i>
      </a>

      <a href="https://www.instagram.com/motoparts_huincarenanco/?hl=es-la">
        <i className="fa fa-instagram"></i>
      </a>
    </div>
  </div>
);
