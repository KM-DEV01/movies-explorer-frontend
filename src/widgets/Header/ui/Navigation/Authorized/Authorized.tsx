import { Link, useLocation, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { useState } from 'react';
import css from './Authorized.module.css';
export function Authorized() {
  const [isShown, setIsShown] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isSavedPage = location.pathname === '/saved-movies';
  const isMoviePage = location.pathname === '/movies';
  const isMainPage = location.pathname === '/';
  return (
    <>
      <button
        className={css.authorized__MenuButton}
        aria-label='Меню'
        type='button'
        onClick={() => setIsShown(!isShown)}
      />
      {isShown && <div className={css.authorized__mask} />}
      <nav
        className={classNames(css.authorized__navigation, {
          [css.authorized__navigation_shown]: isShown,
        })}
      >
        <button
          className={css.authorized__closeButton}
          aria-label='Закрыть'
          type='button'
          onClick={() => setIsShown(!isShown)}
        />
        <div className={css.authorized__links}>
          <Link
            className={classNames(css.authorized__link, css.authorized__link_mobile, {
              [css.authorized__link_active]: isMainPage,
            })}
            to='/'
          >
            Главная
          </Link>
          <Link
            className={classNames(css.authorized__link, {
              [css.authorized__link_active]: isMoviePage,
            })}
            to='/movies'
          >
            Фильмы
          </Link>
          <Link
            className={classNames(css.authorized__link, {
              [css.authorized__link_active]: isSavedPage,
            })}
            to='/saved-movies'
          >
            Сохраненные фильмы
          </Link>
        </div>
        <button
          className={css.authorized__profileButton}
          type='button'
          onClick={() => navigate('/profile')}
        >
          Аккаунт
          <span className={css.authorized__profileIcon} />
        </button>
      </nav>
    </>
  );
}
