import Nav_bar_header from '../header-main/nav-bar-header/nav-bar-header';
import Menu_Header from '../header-main/menu-header/menu-header';
import Services from '../header-main/services-header/services-header';

import classes from './header-main.module.scss';

const Header_main = () => {
  return (
    <header>
      <Nav_bar_header />
      <Menu_Header />
      <Services />
    </header>
  )
}

export default Header_main;