import React from 'react';
import './Input.css';

function Input({ input, onChange }) {
  const { label, errorMessage, ...inputProps } = input;

  const [isFocus, setIsFocus] = React.useState(false);
  function handleChange() {
    setIsFocus(true);
  }
  return (
    <div className="input">
      <label className="input__caption" htmlFor={input.id}>{label}</label>
      <input
        {...inputProps}
        className="input__field"
        onChange={onChange}
        onFocus={handleChange}
      />
      {isFocus && <span className="input__caption input__caption_error">{errorMessage}</span>}
    </div>
  );
}

export default Input;
