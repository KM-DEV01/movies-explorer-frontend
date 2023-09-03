import { MouseEvent } from 'react';
import css from './DeleteMovieButton.module.css';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@app/store';
import { ISavedMovie, movieApi, setSavedMovies, updateMovies } from '@entities/movie';

interface Props {
  active?: boolean;
  movie: ISavedMovie;
}

export function DeleteMovieButton({ active, movie }: Props) {
  const dispatch = useDispatch();
  const savedMovies = useSelector((state: RootState) => state.savedMovies);
  const movies = useSelector((state: RootState) => state.movies);
  const handleDelete = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    movieApi
      .deleteMovie(movie._id)
      .then((res) => {
        const filteredSavedMovies = savedMovies.filter(
          (savedMovie) => savedMovie._id !== movie._id,
        );
        dispatch(setSavedMovies(filteredSavedMovies));

        const foundMovie = movies.find((moviesItem) => moviesItem.id == movie.movieId);
        if (foundMovie) {
          dispatch(updateMovies({ ...foundMovie, savedMovieId: '' }));
        }

        console.log(res);
      })
      .catch((err) => {
        console.log(err.message || JSON.stringify(err));
      });
  };

  return (
    <button
      className={css.movieCard__button}
      type='button'
      onClick={(event) => handleDelete(event)}
    >
      <span
        className={classNames(css.moviesCard__deleteButton, {
          [css.moviesCard__deleteButton_active]: active,
        })}
      />
    </button>
  );
}
