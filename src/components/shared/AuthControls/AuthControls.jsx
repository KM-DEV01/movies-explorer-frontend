import React from 'react';
import './AuthControls.css';
import { Link } from 'react-router-dom';

function AuthControls({
  valid, errorMessage, params, onCancel,
}) {
  const {
    btnText, captionText, linkTo, linkText,
  } = params;

  return (
    <div className="auth-ctrl">
      <button className="auth-ctrl__button" disabled={!valid} type="submit">{btnText}</button>
      {errorMessage && (<span className="auth-ctrl__error">{errorMessage}</span>)}
      {onCancel && (<button className="auth-ctrl__abort" type="button" onClick={onCancel}>Отменить</button>)}
      <div className="auth-ctrl__links">
        <p className="auth-ctrl__caption">{captionText}</p>
        <Link to={linkTo} className="auth-ctrl__link">{linkText}</Link>
      </div>
    </div>
  );
}

export default AuthControls;
