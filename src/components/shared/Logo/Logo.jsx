import React from 'react';
import './Logo.css';
import icon from '../../../images/logo.png';

function Logo() {
  return (
    <img className="logo" src={icon} alt="Логотип учебного проекта" />
  );
}

export default Logo;
