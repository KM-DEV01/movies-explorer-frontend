import { ISavedMovie, MovieCard } from '@entities/movie';
import css from './SavedMoviesList.module.css';
import { DeleteMovieButton } from '@features/movie/deleteMovie';

interface Props {
  savedMovies: Array<ISavedMovie>;
}

export function SavedMoviesList({ savedMovies }: Props) {
  if (!savedMovies.length) {
    return;
  }

  return (
    <section className={css.moviesCards}>
      <ul className={css.moviesCards__list}>
        {savedMovies.map((movie) => (
          <MovieCard
            key={movie._id}
            movie={movie}
            interactButton={<DeleteMovieButton movie={movie} active={true} />}
          />
        ))}
      </ul>
    </section>
  );
}
