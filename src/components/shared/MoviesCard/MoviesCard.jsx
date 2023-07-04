import React from 'react';
import './MoviesCard.css';
import filmOne from '../../../images/thumbnails/1film.png';

// eslint-disable-next-line react/prop-types
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
          // eslint-disable-next-line jsx-a11y/control-has-associated-label
          <button
            className={`movies-card__button movies-card__save-button ${isLiked && 'movies-card__save-button_active'}`}
            type="button"
          />
        ) : (
          // eslint-disable-next-line jsx-a11y/control-has-associated-label
          <button className="movies-card__button movies-card__delete-button" type="button" />
        )}
      </div>
    </li>
  );
}

export default MoviesCard;
