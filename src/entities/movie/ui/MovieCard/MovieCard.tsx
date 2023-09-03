import { Link } from 'react-router-dom';
import { IMovie, ISavedMovie } from '@entities/movie';
import { ReactNode } from 'react';
import css from './MovieCard.module.css';

interface Props {
  movie: ISavedMovie | IMovie;
  interactButton: ReactNode;
}

export function MovieCard({ movie, interactButton }: Props) {
  function setDurationHourFormat(min: number) {
    const hours = Math.trunc(min / 60);
    const minutes = min % 60;
    return `${hours}ч ${minutes}м`;
  }
  return (
    <li className={css.movieCard}>
      <Link
        className={css.movieCard__link}
        to={movie.trailerLink}
        target='_blank'
        rel='noopener noreferrer'
      >
        <div className={css.movieCard__imageContainer}>
          <img
            className={css.movieCard__thumbnail}
            src={typeof movie.image === 'string' ? movie.image : ''}
            alt='filmOne'
          />
        </div>
        <div className={css.moviesCard__container}>
          <div className={css.movieCard__info}>
            <h3 className={css.movieCard__title}>{movie.nameRU}</h3>
            <p className={css.movieCard__text}>{setDurationHourFormat(movie.duration)}</p>
          </div>
          {interactButton}
        </div>
      </Link>
    </li>
  );
}
