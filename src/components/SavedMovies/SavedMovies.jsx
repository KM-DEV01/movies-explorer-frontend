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
      <main className="saved-movies">
        <SearchForm />
        <MoviesCardList isRemovable />
        <Button />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
