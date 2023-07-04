import React from 'react';
import './MainHeader.css';
import logo from '../../../images/logo.png';

function MainHeader() {
  return (
    <header className="main-header">
      <img className="main-header__logo" src={logo} alt="Логотип учебного проекта" />
      <div className="main-header__buttons">
        <button className="main-header__button main-header__button_default" type="button">Регистрация</button>
        <button className="main-header__button main-header__button_colored" type="button">Войти</button>
      </div>
    </header>
  );
}

export default MainHeader;
