import React, { Component } from 'react';
import logo from '../images/6700_logo.png';

const Header = () => {
  return (
    <header>
      {/*!-- TOP INFO -->*/}
      <div className="top_info">
        {/*	<!-- CONTAINER -->*/}
        <div className="container clearfix">
          <ul className="secondary_menu">
            <li>
              <a href="nosotros.php">Nosotros</a>
            </li>
            <li>
              <a href="contacto.php">Contacto</a>
            </li>
            <li>
              <a href="registro.php">Registrate</a>
            </li>
            <li>
              <a href="cuenta_motoparts.php">Mi cuenta</a>
            </li>
          </ul>

          <div className="live_chat">
            <a
              href="https://api.whatsapp.com/send?phone=5493585480201&&&&text=Hola%20escribo%20desde%20la%20web%20todomotos.com!"
              target="_blank"
            >
              <img
                src="https://img.icons8.com/color/48/000000/whatsapp.png"
                width="20px"
                height="20px"
              />
              3585480201
            </a>
          </div>

          <div className="phone_top">LR_MOTOS@HOTMAIL.COM.AR </div>
        </div>{' '}
        {/*<!-- //CONTAINER -->*/}
      </div>{' '}
      {/*<!-- TOP INFO -->*/}
      {/*<!-- MENU BLOCK -->*/}
      <div className="menu_block">
        {/*<!-- CONTAINER -->*/}
        <div className="container clearfix">
          {/*<!-- LOGO -->*/}
          <div className="logo" style={{ width: '100%', maxWidth: '270px' }}>
            <a href="index.php" style={{ width: '100%', maxWidth: '270px' }}>
              <img src={logo} alt="" />
            </a>
          </div>
          {/*<!-- //LOGO -->*/}

          {/*<!-- SEARCH FORM -->*/}
          <div className="top_search_form">
            <a className="top_search_btn">
              <i className="fa fa-search"></i>
            </a>
            <form
              action="productos_buscar.php"
              method="get"
              encType="multipart/form-data"
            >
              <input
                type="text"
                name="variable"
                id="variable"
                defaultValue="Buscar"
              />
              {/*<input
                  type="text"
                  name="variable"
                  id="variable"
                  defaultValue="Buscar"
                  onFocus="if (this.value == 'Buscar') this.value = '';"
                  onBlur="if (this.value == '') this.value = 'Buscar';"
                />*/}
            </form>
          </div>
          {/*<!-- SEARCH FORM -->*/}

          {/*<!-- SHOPPING BAG -->*/}
          <div className="shopping_bag">
            <a className="shopping_bag_btn" href="carrito.php">
              <p>Carrito</p>
              <div
                className="shopping-cart-items"
                id="nume_items"
                style={{ float: 'right' }}
              >
                <span>0</span>
              </div>
            </a>
          </div>

          {/*<!-- //SHOPPING BAG -->*/}
          {/*<!-- LOVE LIST -->*/}
          {/*<!-- //LOVE LIST -->*/}
          {/*<!-- MENU -->*/}
          <ul className="navmenu center">
            <li className="sub-menu first active ">
              <a href="index.php">Home</a>
              {/*<!-- MEGA MENU -->*/}
            </li>
            <li className=" ">
              <a href="productos.php?estado=1&&&&&seccion=2&&&&&pagina=1">
                PRODUCTOS
              </a>
              {/*<!-- MEGA MENU -->*/}
              <ul className="mega_menu megamenu_col1 clearfix">
                <li className="col"></li>
              </ul>
              {/*<!-- //MEGA MENU -->*/}
            </li>
            <li>
              <a href="noticias.php?seccion=3">Noticias</a>
            </li>
          </ul>
          {/*<!-- //MENU -->*/}
        </div>
        {/*<!-- //MENU BLOCK -->*/}
      </div>
      {/*<!-- //CONTAINER -->*/}
    </header>
  );
};

export default Header;
