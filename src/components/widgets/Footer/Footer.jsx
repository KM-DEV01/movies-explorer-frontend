import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <hr className="footer__stroke" />
      <div className="footer__info">
        <p className="footer__copyright">&copy; 2023</p>
        <nav className="footer__links">
          <Link to="https://practicum.yandex.ru/profile/web/" className="footer__link" target="_blank" rel="noopener noreferrer">Яндекс.Практикум</Link>
          <Link to="https://github.com/KM-ForProjects" className="footer__link" target="_blank" rel="noopener noreferrer">Github</Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
