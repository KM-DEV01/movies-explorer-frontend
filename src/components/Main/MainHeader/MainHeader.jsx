import React from 'react';
import './MainHeader.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../images/logo.png';

function MainHeader() {
  const navigate = useNavigate();
  const onClick = () => navigate('/sign-in', { replace: false });

  return (
    <header className="main-header">
      <img className="main-header__logo" src={logo} alt="Логотип учебного проекта" />
      <nav className="unauthorized__navs">
        <Link to="/sign-up" className="main-header__link" type="button">Регистрация</Link>
        <button className="unauthorized__button" type="button" onClick={onClick}>Войти</button>
      </nav>
    </header>
  );
}

export default MainHeader;
