import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../../../images/logo/logo.png';
import Navigation from '../Navigation/Navigation';

function Header({ loggedIn }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isMainPage = location.pathname === '/';

  return (
    <header className={`header ${isMainPage && 'header-main'}`}>
      <button className="header__button" type="button" onClick={() => navigate('/')}>
        <img className="header__logo" src={logo} alt="Логотип учебного проекта" />
      </button>
      <Navigation isMainPage={isMainPage} loggedIn={loggedIn} />
    </header>
  );
}

export default Header;
