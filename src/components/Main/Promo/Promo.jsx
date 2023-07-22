import React from 'react';
import './Promo.css';
import promoLogo from '../../../images/logo/landing-logo-min.svg';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
        <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <a href="#about" className="promo__link">Узнать больше</a>
      </div>
      <img className="promo__logo" src={promoLogo} alt="Промо" />
    </section>
  );
}

export default Promo;
