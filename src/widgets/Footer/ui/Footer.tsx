import { Link } from 'react-router-dom';
import css from './Footer.module.css';

export function Footer() {
  return (
    <footer className={css.footer}>
      <h2 className={css.footer__title}>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <hr className={css.footer__stroke} />
      <div className={css.footer__info}>
        <p className={css.footer__copyright}>&copy; 2023</p>
        <nav className={css.footer__links}>
          <Link
            className={css.footer__link}
            to='https://practicum.yandex.ru/profile/web/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Яндекс.Практикум
          </Link>
          <Link
            className={css.footer__link}
            to='https://github.com/KM-ForProjects'
            target='_blank'
            rel='noopener noreferrer'
          >
            Github
          </Link>
        </nav>
      </div>
    </footer>
  );
}
