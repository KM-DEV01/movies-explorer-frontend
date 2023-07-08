import React from 'react';
import './Promo.css';
import { Link } from 'react-router-dom';
import promoLogo from '../../../images/landing-logo-min.svg';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
        <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <Link to="/movies" className="promo__link">Узнать больше</Link>
      </div>
      <img className="promo__logo" src={promoLogo} alt="Промо" />
    </section>
  );
}

export default Promo;
