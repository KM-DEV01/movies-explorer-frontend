import React from 'react';
import './MovieCard.css';
import { Link } from 'react-router-dom';

function MovieCard({ movie, onClick, savedPage }) {
  const baseUrl = 'https://api.nomoreparties.co/';
  const imageUrl = movie.image.url ? baseUrl + movie.image.url : movie.image;

  function setDurationHourFormat(min) {
    const hours = Math.trunc(min / 60);
    const minutes = min % 60;
    return `${hours}ч ${minutes}м`;
  }

  return (
    <li className={`movies-card ${savedPage && 'movies-card_removable'}`}>
      <Link to={movie.trailerLink} className="movies-card__link" target="_blank" rel="noopener noreferrer">
        <div className="movies-card__image-container">
          <img className="movies-card__thumbnail" src={imageUrl} alt="filmOne" />
        </div>
        <div className="movies-card__container">
          <div className="movies-card__info">
            <h3 className="movies-card__title">{movie.nameRU}</h3>
            <p className="movies-card__text">{setDurationHourFormat(movie.duration)}</p>
          </div>
          {!savedPage
            ? (
              <button className="movies-card__button" type="button" onClick={(event) => onClick(event, movie, baseUrl)}>
                <span className={`movies-card__save-button ${movie.saved && 'movies-card__save-button_active'}`} />
              </button>
            ) : (
              <button className="movies-card__button" type="button" onClick={(event) => onClick(event, movie._id)}>
                <span className="movies-card__delete-button" />
              </button>
            )}
        </div>
      </Link>
    </li>
  );
}
export default MovieCard;
