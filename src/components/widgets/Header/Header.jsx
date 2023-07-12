import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../../../images/logo.png';
import Navigation from '../Navigation/Navigation';

function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <button type="button" onClick={() => navigate('/')}>
        <img className="header__logo" src={logo} alt="Логотип учебного проекта" />
      </button>
      <Navigation />
    </header>
  );
}

export default Header;
