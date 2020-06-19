import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        {/*<!-- CONTAINER -->*/}
        <div className="container" data-animated="fadeInUp">
          {/*<!-- ROW -->*/}
          <div className="row">
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

            <div className="col-lg-2 col-md-2 col-sm-3 col-xs-6 col-ss-12 padbot30">
              <h4>Nuestra Web</h4>
              <ul className="foot_menu">
                <li>
                  <a href="nosotros.php">Nosotros</a>
                </li>
                <li>
                  <a href="como_comprar.php">Como comprar</a>
                </li>
                <li>
                  <a href="noticias.php">Noticias</a>
                </li>
                <li>
                  <a href="productos.php">Nuestros productos</a>
                </li>
                <li>
                  <a href="productos_marcas.php">Marcas</a>
                </li>
                <li>
                  <a href="contacto.php">Contacto</a>
                </li>
              </ul>
            </div>

            <div className="respond_clear_480"></div>

            <div className="col-lg-4 col-md-4 col-sm-6 padbot30">
              <h4>Nuestra Historia&nbsp;</h4>
              <div>
                <p
                  style={{
                    boxSizing: 'border-box',
                    margin: '-7px 0px 27px',
                    paddingRight: '40px',
                    lineHeight: '38px',
                    fontSize: '30px',
                    color: 'rgb(36, 36, 36)',
                    fontFamily: 'Roboto, sans-serif',
                  }}
                >
                  <span style={{ fontFamily: 'Lato' }}>
                    <span
                      style={{
                        boxSizing: 'border-box',
                        display: 'block',
                        marginBottom: '22px',
                        lineHeight: '22px',
                        fontSize: '11px',
                        color: 'rgb(102, 102, 102)',
                      }}
                    >
                      <span
                        style={{ color: 'rgb(34, 34, 34); font-size: 12px' }}
                      >
                        <span
                          style={{ fontFamily: 'verdana,geneva,sans-serif' }}
                        >
                          <span style={{ color: '#ffa500' }}>
                            Sin lugar a dudas nuestra m&aacute;s grande
                            pasi&oacute;n al igual que la tuya son las{' '}
                            <strong>MOTOS</strong>, algo en lo que venimos
                            trabajando desde hace 3 generaciones, comenzando con
                            la actividad en Rio Cuarto con 35 sub agentes en
                            todo el pa&iacute;s y en 2015 nace{' '}
                            <strong>MOTOPARTS</strong> en{' '}
                            <strong>Huinca Renanc&oacute; </strong>lo que nos
                            motiva y nos impulsa a seguir d&iacute;a a
                            d&iacute;a ofreci&eacute;ndoles los mejores
                            accesorios, repuestos, motos y bicicletas para que
                            puedan disfrutar junto a su familia y amigos,
                            estamos para asesorarte y brindarte la mejor
                            atenci&oacute;n
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </p>
              </div>
            </div>

            <div className="respond_clear_768"></div>

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
          </div>
          {/*<!-- //ROW -->*/}
        </div>
        {/*<!-- //CONTAINER -->*/}

        {/*<!-- COPYRIGHT -->*/}
        <div className="copyright">
          {/*	<!-- CONTAINER -->*/}
          <div className="container clearfix">
            <div className="copyright_inf">
              <span>Motoparts Huinca Renancó © 2016</span> |
              <a className="back_top" href="#">
                Subir <i className="fa fa-angle-up"></i>
              </a>
            </div>
          </div>
          {/*<!-- //CONTAINER -->*/}
        </div>
        {/* <!-- //COPYRIGHT -->*/}
      </footer>
    );
  }
}

export default Footer;
