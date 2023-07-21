import React from 'react';
import './MoviesContent.css';

import SearchForm from '../SearchForm/SearchForm';
import InfoPanel from '../InfoPanel/InfoPanel';
import MoviesCardList from '../MoviesCardsList/MoviesCardList';
import Message from '../Message/Message';
import Preloader from '../Preloader/Preloader';

function MoviesContent({
  onSubmit,
  onChange,
  onChecked,
  onClick,
  keyWord,
  errorMessage,
  filter,
  movies,
  isLoading,
}) {
  return (
    <main className="movies-content">
      <SearchForm
        onSubmit={onSubmit}
        onChange={onChange}
        onChecked={onChecked}
        keyWord={keyWord}
        filter={filter}
      />
      {isLoading ? <Preloader /> : <MoviesCardList movies={movies} onClick={onClick} />}
      {!isLoading && <Message isError={errorMessage.length} isMovies={movies.length} />}
      <InfoPanel errorMessage={errorMessage} />
    </main>
  );
}

export default MoviesContent;
