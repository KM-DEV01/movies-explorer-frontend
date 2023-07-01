import React from 'react';
import './Portfolio.css';
import link from '../../../images/link.svg';

function Portfolio() {
  return (
    <section className="portfolio">
      <ul className="portfolio__list">
        Портфолио
        <li className="portfolio__list-element">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="portfolio__list-link" href="#">
            Статичный сайт
            <img className="portfolio__link-icon" src={link} alt="Иконка ссылки" />
          </a>
          <hr className="portfolio__stroke" />
        </li>
        <li className="portfolio__list-element">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="portfolio__list-link" href="#">
            Адаптивный сайт
            <img className="portfolio__link-icon" src={link} alt="Иконка ссылки" />
          </a>
          <hr className="portfolio__stroke" />
        </li>
        <li className="portfolio__list-element">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="portfolio__list-link" href="#">
            Одностраничное приложение
            <img className="portfolio__link-icon" src={link} alt="Иконка ссылки" />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
