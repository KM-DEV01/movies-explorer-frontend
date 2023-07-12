import React from 'react';
import './Movies.css';

import Header from '../widgets/Header/Header';
import Footer from '../widgets/Footer/Footer';

import SearchForm from '../shared/SearchForm/SearchForm';
import MoviesCardList from '../shared/MoviesCardList/MoviesCardList';
import Button from '../shared/Button/Button';

function Movies() {
  const cardsCount = 12;
  return (
    <>
      <Header />
      <main className="movies">
        <SearchForm />
        <MoviesCardList />
        <Button cardsCount={cardsCount} />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
