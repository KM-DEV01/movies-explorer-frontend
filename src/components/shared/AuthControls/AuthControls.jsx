import React from 'react';
import './AuthControls.css';
import { Link } from 'react-router-dom';

function AuthControls({
  btnText = '',
  captionText = '',
  linkTo = '/',
  linkText = '',
}) {
  return (
    <div className="auth-ctrl">
      <button className="auth-ctrl__button" type="submit">{btnText}</button>
      <div className="auth-ctrl__links">
        <p className="auth-ctrl__caption">{captionText}</p>
        <Link to={linkTo} className="auth-ctrl__link">{linkText}</Link>
      </div>
    </div>
  );
}

export default AuthControls;
