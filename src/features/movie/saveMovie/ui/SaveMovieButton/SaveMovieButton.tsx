import { MouseEvent } from 'react';
import css from './SaveMovieButton.module.css';
import classNames from 'classnames';
import { IMovie, movieApi, updateMovies } from '@entities/movie';
import { SetMovieData } from '@features/movie/saveMovie/lib/setMovieData.ts';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@app/store';
interface Props {
  movie: IMovie;
}

export function SaveMovieButton({ movie }: Props) {
  const dispatch = useDispatch();
  const movies = useSelector((state: RootState) => state.movies);

  const setSavedMovieId = (movieObj: IMovie, savedMovieId: string) => {
    const movie = movies.find((moviesItem) => moviesItem.id == movieObj.id);
    if (movie) {
      dispatch(updateMovies({ ...movie, savedMovieId }));
    }
  };

  const createMovie = () => {
    const movieData = SetMovieData(movie);
    movieApi
      .createMovie(movieData)
      .then((res) => {
        setSavedMovieId(movie, res.data._id);
      })
      .catch((err) => console.log(err.message || JSON.stringify(err)));
  };

  const deleteMovie = () => {
    movieApi
      .deleteMovie(movie.savedMovieId)
      .then((res) => {
        console.log(res);
        setSavedMovieId(movie, '');
      })
      .catch((err) => console.log(err.message || JSON.stringify(err)));
  };

  const handleSave = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (!movie.savedMovieId) {
      createMovie();
      return;
    }
    deleteMovie();
  };

  return (
    <button className={css.movieCard__button} type='button' onClick={(event) => handleSave(event)}>
      <span
        className={classNames(css.moviesCard__saveButton, {
          [css.moviesCard__saveButton_active]: movie.savedMovieId,
        })}
      />
    </button>
  );
}
