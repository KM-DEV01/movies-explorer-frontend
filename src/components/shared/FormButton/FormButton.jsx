import React from 'react';
import './FormButton.css';

// eslint-disable-next-line react/prop-types
function FormButton({ submitButtonText = '', authLabel = '', authButtonText = '' }) {
  return (
    <div className="form__buttons">
      <button className="form__button" type="submit">{submitButtonText}</button>
      <div className="auth">
        <p>{authLabel}</p>
        <button className="auth__button" type="button">{authButtonText}</button>
      </div>
    </div>
  );
}

export default FormButton;
