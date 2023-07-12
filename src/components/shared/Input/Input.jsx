import React from 'react';
import './Input.css';

function Input({
  inputName = '',
  errorText = '',
  inputType = 'text',
  placeholder = '',
}) {
  return (
    <div className="input">
      <span className="input__caption">{inputName}</span>
      <input
        className={`input__field ${errorText && 'input__field_error'}`}
        type={inputType}
        placeholder={placeholder}
        required
      />
      <span className="input__caption input__caption_error">{errorText}</span>
    </div>
  );
}

export default Input;
