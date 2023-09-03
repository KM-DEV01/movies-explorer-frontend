import { Link } from 'react-router-dom';
import css from './Portfolio.module.css';

export function Portfolio() {
  return (
    <section className={css.portfolio}>
      <h2 className={css.portfolio__title}>Портфолио</h2>
      <ul className={css.portfolio__list}>
        <li className={css.portfolio__listElement}>
          <Link
            className={css.portfolio__listLink}
            to='https://km-forprojects.github.io/how-to-learn/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Статичный сайт
            <span className={css.portfolio__linkIcon} />
          </Link>
          <hr className={css.portfolio__stroke} />
        </li>
        <li className={css.portfolio__listElement}>
          <Link
            className={css.portfolio__listLink}
            to='https://km-forprojects.github.io/russian-travel/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Адаптивный сайт
            <span className={css.portfolio__linkIcon} />
          </Link>
          <hr className={css.portfolio__stroke} />
        </li>
        <li className={css.portfolio__listElement}>
          <Link
            className={css.portfolio__listLink}
            to='https://km-forprojects.github.io/mesto/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Одностраничное приложение
            <span className={css.portfolio__linkIcon} />
          </Link>
        </li>
      </ul>
    </section>
  );
}
