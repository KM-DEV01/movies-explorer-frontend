import React from 'react';
import './AuthHeader.css';
import logo from '../../../images/logo.png';

// eslint-disable-next-line react/prop-types
function AuthHeader({ greet = '' }) {
  return (
    <header className="auth-header">
      <img className="auth-header__logo" src={logo} alt="Логотип" />
      <h2 className="auth-header__title">{greet}</h2>
    </header>
  );
}

export default AuthHeader;
