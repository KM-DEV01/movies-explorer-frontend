import React from 'react';
import './Promo.css';
import promoLogo from '../../../images/landing-logo-min.svg';

function Promo() {
  return (
    <section className="promo">
      <div>
        <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
        <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <button className="promo__button" type="button">Узнать больше</button>
      </div>
      <img className="promo__logo" src={promoLogo} alt="Промо" />
    </section>
  );
}

export default Promo;
