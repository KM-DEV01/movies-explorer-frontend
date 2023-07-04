import React from 'react';
import './Button.css';

// eslint-disable-next-line react/prop-types
function Button({ cardsCount = 0 }) {
  return cardsCount >= 12 ? (
    <div className="button-panel">
      <button className="button-panel__more" type="button">Ещё</button>
    </div>
  ) : (
    <div className="button-panel button-panel_empty" />
  );
}

export default Button;
