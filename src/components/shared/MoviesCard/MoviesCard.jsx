import React from 'react';
import './MoviesCard.css';
import { Link } from 'react-router-dom';

function MoviesCard({ isRemovable = false, isLiked = false, movie }) {
  const baseUrl = 'https://api.nomoreparties.co/';
  function setDurationHourFormat(min) {
    const hours = Math.trunc(min / 60);
    const minutes = min % 60;
    return `${hours}ч ${minutes}м`;
  }

  return (
    <li className={`movies-card ${isRemovable && 'movies-card_removable'}`}>
      <Link to={movie.trailerLink} className="movies-card__link" target="_blank" rel="noopener noreferrer">
        <div className="movies-card__image-container">
          <img className="movies-card__thumbnail" src={baseUrl + movie.image.url} alt="filmOne" />
        </div>
        <div className="movies-card__container">
          <div className="movies-card__info">
            <h3 className="movies-card__title">{movie.nameRU}</h3>
            <p className="movies-card__text">{setDurationHourFormat(movie.duration)}</p>
          </div>

          {!isRemovable ? (
            <button className="movies-card__button" type="button">
              <span className={`movies-card__save-button ${isLiked && 'movies-card__save-button_active'}`} />
            </button>
          ) : (
            <button className="movies-card__button" type="button">
              <span className="movies-card__delete-button" />
            </button>
          )}

        </div>
      </Link>
    </li>
  );
}

export default MoviesCard;
