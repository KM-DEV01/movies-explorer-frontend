import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthHeader.css';
import logo from '../../../images/logo/logo.png';

function AuthHeader({ greet = '' }) {
  const navigate = useNavigate();
  return (
    <header className="auth-header">
      <button type="button" onClick={() => navigate('/')}>
        <img className="auth-header__logo" src={logo} alt="Логотип" />
      </button>
      <h2 className="auth-header__title">{greet}</h2>
    </header>
  );
}

export default AuthHeader;
