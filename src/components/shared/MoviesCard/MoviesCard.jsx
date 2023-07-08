import React from 'react';
import './MoviesCard.css';
import filmOne from '../../../images/thumbnails/1film.png';

function MoviesCard({ isRemovable = false, isLiked = false }) {
  return (
    <li className={`movies-card ${isRemovable && 'movies-card_removable'}`}>
      <img className="movies-card__thumbnail" src={filmOne} alt="filmOne" />
      <div className="movies-card__container">
        <div className="movies-card__info">
          <h3 className="movies-card__title">33 слова о дизайне</h3>
          <p className="movies-card__text">1ч 47м</p>
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
    </li>
  );
}

export default MoviesCard;
