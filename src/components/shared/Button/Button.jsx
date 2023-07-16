import React from 'react';
import './Button.css';

function Button({ cardsCount }) {
  return cardsCount >= 12 ? (
    <section className="button-panel">
      <button className="button-panel__more" type="button">Ещё</button>
    </section>
  ) : (
    <section className="button-panel button-panel_empty" />
  );
}

export default Button;
