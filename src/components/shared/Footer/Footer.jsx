import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <hr className="footer__stroke" />
      <div className="footer__info">
        <p className="footer__copyright">&copy; 2023</p>
        <div className="footer__links">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="footer__link">Яндекс.Практикум</a>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="footer__link">Github</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
