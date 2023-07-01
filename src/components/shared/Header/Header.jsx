import React from 'react';
import { useLocation } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './Header.css';

function Header() {
  let location;
  // eslint-disable-next-line prefer-const
  location = useLocation();
  // eslint-disable-next-line consistent-return
  const child = () => {
    switch (location.pathname) {
      case '/':
        return (
          <>
            <Logo />
            <div className="header__buttons">
              <button className="header__button header__button_default" type="button">Регистрация</button>
              <button className="header__button header__button_colored" type="button">Войти</button>
            </div>
          </>
        );
      case '/movies':
        return (
          <>
            <div className="header__links">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a className="header__link" type="button">Фильмы</a>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a className="header__link" type="button">Сохраненные фильмы</a>
            </div>
            <div className="header__profile">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label className="header__profile-icon" htmlFor="profile-button" />
              <button className="header__button header__button_profile" type="button" id="profile-button">Аккаунт</button>
            </div>
          </>
        );
      default:
    }
  };

  return (
    <header className="header">
      {child()}
    </header>
  );
}

export default Header;
