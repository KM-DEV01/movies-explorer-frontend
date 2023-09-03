import { Header } from '@widgets/Header';
import { Footer } from '@widgets/Footer';
import { useEffect, useState } from 'react';
import { movieApi, setSavedMovies } from '@entities/movie';
import { duration, SavedMoviesList } from '@widgets/MoviesList';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@app/store';
import { SearchForm } from '@features/search/searchByKeyword';
import { ToggleSwitch } from '@shared/ui/ToggleSwitch/ToggleSwitch.tsx';
import { EmptySearchResult } from '@widgets/EmptySearchResult';
import { Preloader } from '@widgets/Preloader';
export function SavedMovies() {
  const dispatch = useDispatch();
  const savedMovies = useSelector((state: RootState) => state.savedMovies);
  const [filterShorts, setFilterShorts] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (keyWord: string) => {
    setIsError(false);
    setIsSubmitted(true);
    setIsLoading(true);
    movieApi
      .getSavedMovies()
      .then((res) => {
        const filteredMoviesArray = res.movies.filter((movie) =>
          movie.nameRU.trim().toLowerCase().includes(keyWord.trim().toLowerCase()),
        );
        if (filteredMoviesArray.length) setIsSubmitted(false);
        dispatch(setSavedMovies(filteredMoviesArray));
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

  useEffect(() => {
    setIsLoading(true);
    movieApi
      .getSavedMovies()
      .then((res) => {
        dispatch(setSavedMovies(res.movies));
      })
      .catch((err) => {
        console.log(err.message || JSON.stringify(err));
        setIsError(true);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className='movies'>
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
                ? savedMovies.filter((movie) => movie.duration <= duration).length
                : savedMovies.length
            }
            isError={isError}
            isSubmitted={isSubmitted}
          />
          <SavedMoviesList
            savedMovies={
              filterShorts ? savedMovies.filter((movie) => movie.duration <= duration) : savedMovies
            }
          />
        </>
      )}
      <Footer />
    </div>
  );
}
