import React, { Component } from 'react';
import TopMenu from './Header/TopMenu';
import Menu from './Header/Menu';

import './header.css';

const Header = () => {
  return (
    <header>
      <TopMenu />
      <Menu />
    </header>
  );
};

export default Header;
