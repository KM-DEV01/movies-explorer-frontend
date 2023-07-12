import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isShown, setIsShown] = React.useState(false);
  const handleClick = () => {
    setIsShown(!isShown);
  };

  const isSavedFilms = () => location.pathname === '/saved-movies';

  return (
    <>
      {isShown && <div className="mask" /> }
      <nav className={`navigation ${isShown && 'navigation__shown'}`}>
        <button className="navigation__close-button" type="button" onClick={handleClick}>
          <span />
        </button>
        <div className="navigation__links">
          <Link to="/" className="navigation__link navigation__link_mobile">Главная</Link>
          <Link to="/movies" className={`navigation__link ${!isSavedFilms() && 'navigation__link_active'}`}>Фильмы</Link>
          <Link to="/saved-movies" className={`navigation__link ${isSavedFilms() && 'navigation__link_active'}`}>Сохраненные фильмы</Link>
        </div>
        <button className="navigation__profile-button" type="button" onClick={() => navigate('/profile')}>
          Аккаунт
          <span className="navigation__profile-icon" />
        </button>
      </nav>
      <button className="navigation__button" type="button" onClick={handleClick}>
        <span />
      </button>
    </>
  );
}

export default Navigation;
