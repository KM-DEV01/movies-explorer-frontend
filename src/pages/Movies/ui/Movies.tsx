import css from './Movies.module.css';
import { Header } from '@widgets/Header';
import { Footer } from '@widgets/Footer';
import { useState } from 'react';
import { movieApi, setMovies } from '@entities/movie';
import { MoviesList } from '@widgets/MoviesList';
import { SearchForm } from '@features/search/searchByKeyword';
import { ToggleSwitch } from '@shared/ui/ToggleSwitch/ToggleSwitch.tsx';
import { duration } from '@widgets/MoviesList/MoviesList/consts/conf.ts';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@app/store';
import { EmptySearchResult } from '@widgets/EmptySearchResult';
import { Preloader } from '@widgets/Preloader';

export function Movies() {
  const baseUrl = 'https://api.nomoreparties.co/';
  const dispatch = useDispatch();
  const movies = useSelector((state: RootState) => state.movies);

  const [isError, setIsError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [filterShorts, setFilterShorts] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (keyWord: string) => {
    setIsError(false);
    setIsSubmitted(true);
    setIsLoading(true);
    Promise.all([movieApi.getSavedMovies(), movieApi.getMovies()])
      .then(([savedMoviesRes, moviesRes]) => {
        const moviesArray = moviesRes.map((movie) => {
          const savedMovie = savedMoviesRes.movies.find(
            (savedMoviesElement) => savedMoviesElement.movieId === movie.id,
          );
          if (!savedMovie) {
            movie.savedMovieId = '';
          } else {
            movie.savedMovieId = savedMovie._id;
          }
          if (typeof movie.image === 'string') return movie;
          movie.image = baseUrl + movie.image.url;
          return movie;
        });

        const filteredMoviesArray = moviesArray.filter((movie) =>
          movie.nameRU.trim().toLowerCase().includes(keyWord.trim().toLowerCase()),
        );
        if (filteredMoviesArray.length) setIsSubmitted(false);
        dispatch(setMovies(filteredMoviesArray));
      })
      .catch((err) => {
        console.log(err.message || JSON.stringify(err));
        setIsError(true);
      })
      .finally(() => setIsLoading(false));
  };

  const handleChecked = () => {
    setFilterShorts(!filterShorts);
  };

  return (
    <div className={css.movies}>
      <Header />
      <SearchForm onSubmit={onSubmit} />
      <ToggleSwitch checked={filterShorts} onChecked={handleChecked} text={'Короткометражки'} />
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <EmptySearchResult
            isMovies={
              filterShorts
                ? movies.filter((movie) => movie.duration <= duration).length
                : movies.length
            }
            isError={isError}
            isSubmitted={isSubmitted}
          />
          <MoviesList
            movies={filterShorts ? movies.filter((movie) => movie.duration <= duration) : movies}
          />
        </>
      )}
      <Footer />
    </div>
  );
}
