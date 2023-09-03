import { IMovie, IMovieData } from '@entities/movie';

export function SetMovieData(movie: IMovie): IMovieData {
  return {
    country: movie.country,
    director: movie.director,
    duration: movie.duration,
    year: movie.year,
    description: movie.year,
    image: movie.image,
    trailerLink: movie.trailerLink,
    nameRU: movie.nameRU.trim(),
    nameEN: movie.nameEN.trim(),
    thumbnail: movie.image,
    movieId: movie.id,
  };
}
