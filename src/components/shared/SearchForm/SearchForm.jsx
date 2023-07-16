import React from 'react';
import './SearchForm.css';

import FilterCheckbox from './FilterCheckbox/FilterCheckbox';

import moviesApi from '../../../utils/MoviesApi';

function SearchForm({
  keyWord,
  setKeyWord,
  setIsSearched,
  setFoundMovies,
  setIsLoading,
  setIsFailed,
  isFilterDuration,
  setIsFilterDuration,
  isValid,
  setIsValid,
}) {
  const [errorMessage, setErrorMessage] = React.useState('');

  function reset() {
    setFoundMovies([]);
    setIsLoading(true);
    setIsSearched(true);
    setIsFailed(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (isValid) {
      reset();
      return moviesApi.getMovies()
        .then((movies) => {
          const query = new RegExp((keyWord), 'gmi');
          // TODO Доделать поиск
          setFoundMovies(movies.filter((movie) => movie.nameRU.match(query)));
        })
        .catch((err) => {
          setIsFailed(true);
          setErrorMessage(err.message.toString());
        })
        .finally(() => setIsLoading(false));
    }
    return setErrorMessage('Нужно ввести ключевое слово');
  }

  function handleNameChange(event) {
    setKeyWord(event.target.value);
    setIsSearched(false);
    if (event.target.value) {
      setErrorMessage('');
      return setIsValid(true);
    }
    return setIsValid(false);
  }

  return (
    <section className="search">
      <form className="search__form" onSubmit={handleSubmit}>
        <div className="search__container">
          <span className="search__icon" />
          <input
            className="search__input"
            type="text"
            placeholder="Фильм"
            onChange={handleNameChange}
            value={keyWord}
          />
          <button className="search__button" type="submit">Найти</button>
        </div>
        <hr className={`search__stroke ${errorMessage && 'search__stroke-error'}`} />
        <p className="search__error">{errorMessage}</p>
        <FilterCheckbox
          isFilterDuration={isFilterDuration}
          setIsFilterDuration={setIsFilterDuration}
        />
      </form>
    </section>
  );
}

export default SearchForm;
