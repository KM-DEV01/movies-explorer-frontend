import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation({ isMainPage, loggedIn }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isShown, setIsShown] = React.useState(false);
  const isSavedPage = location.pathname === '/saved-movies';

  return (
    !loggedIn ? (
      <nav className="unauthorized__navs">
        <Link to="/sign-up" className="unauthorized__link" type="button">Регистрация</Link>
        <button className="unauthorized__button" type="button" onClick={() => navigate('/sign-in')}>Войти</button>
      </nav>
    ) : (
      <>
        <button className="navigation__button" aria-label="Меню" type="button" onClick={() => setIsShown(!isShown)} />
        {isShown && <div className="mask" /> }
        <nav className={`navigation ${isShown && 'navigation__shown'}`}>
          <button className="navigation__close-button" aria-label="Закрыть" type="button" onClick={() => setIsShown(!isShown)} />
          <div className="navigation__links">
            <Link to="/" className="navigation__link navigation__link_mobile">Главная</Link>
            <Link to="/movies" className={`navigation__link ${(!isSavedPage && !isMainPage) && 'navigation__link_active'}`}>Фильмы</Link>
            <Link to="/saved-movies" className={`navigation__link ${(isSavedPage && !isMainPage) && 'navigation__link_active'}`}>Сохраненные фильмы</Link>
          </div>
          <button className="navigation__profile-button" type="button" onClick={() => navigate('/profile')}>
            Аккаунт
            <span className="navigation__profile-icon" />
          </button>
        </nav>
      </>
    )
  );
}

export default Navigation;
