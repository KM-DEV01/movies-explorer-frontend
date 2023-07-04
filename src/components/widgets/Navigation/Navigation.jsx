import React from 'react';
import './Navigation.css';

function Navigation() {
  return (
    <>
      <div className="navigation__links">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className="navigation__link" type="button">Фильмы</a>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className="navigation__link" type="button">Сохраненные фильмы</a>
      </div>
      <button className="navigation__profile-button" type="button">
        Аккаунт
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label className="navigation__profile-icon" />
      </button>
    </>
  );
}

export default Navigation;
