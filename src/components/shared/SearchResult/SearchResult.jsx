import React from 'react';
import './SearchResult.css';

import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Message from './Message/Message';

function SearchResult({
  isSearched,
  isFailed,
  isLoading,
  foundMovies,
  isFilterDuration,
}) {
  if (isLoading) {
    return (<Preloader />);
  }
  if (foundMovies.length) {
    return (<MoviesCardList foundMovies={foundMovies} isFilterDuration={isFilterDuration} />);
  }
  return (
    <Message isSearched={isSearched} isFailed={isFailed} foundMovies={foundMovies} />
  );
}

export default SearchResult;
