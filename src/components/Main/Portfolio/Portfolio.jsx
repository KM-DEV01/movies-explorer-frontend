import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__list-element">
          <Link to="https://km-forprojects.github.io/how-to-learn/" className="portfolio__list-link" target="_blank" rel="noopener noreferrer">
            Статичный сайт
            <span className="portfolio__link-icon" />
          </Link>
          <hr className="portfolio__stroke" />
        </li>
        <li className="portfolio__list-element">
          <Link to="https://km-forprojects.github.io/russian-travel/" className="portfolio__list-link" target="_blank" rel="noopener noreferrer">
            Адаптивный сайт
            <span className="portfolio__link-icon" />
          </Link>
          <hr className="portfolio__stroke" />
        </li>
        <li className="portfolio__list-element">
          <Link to="https://km-forprojects.github.io/mesto/" className="portfolio__list-link" target="_blank" rel="noopener noreferrer">
            Одностраничное приложение
            <span className="portfolio__link-icon" />
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
