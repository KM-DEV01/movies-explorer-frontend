import React from 'react';
import './Button.css';

// eslint-disable-next-line react/prop-types
function Button({ cardsCount = 0 }) {
  return cardsCount >= 12 ? (
    <section className="button-panel">
      <button className="button-panel__more" type="button">Ещё</button>
    </section>
  ) : (
    <section className="button-panel button-panel_empty" />
  );
}

export default Button;
