import React from 'react';
import './SavedMovies.css';

import Header from '../widgets/Header/Header';
import Footer from '../widgets/Footer/Footer';

import SearchForm from '../shared/SearchForm/SearchForm';
import MoviesCardList from '../shared/MoviesCardList/MoviesCardList';
import Button from '../shared/Button/Button';

function SavedMovies() {
  return (
    <>
      <Header />
      <SearchForm />
      <MoviesCardList isRemovable />
      <Button />
      <Footer />
    </>
  );
}

export default SavedMovies;
