import React from 'react';
import './Movies.css';

import Header from '../shared/Header/Header';
import Footer from '../shared/Footer/Footer';

import SearchForm from './SearchForm/SearchForm';

function Movies() {
  return (
    <section className="container">
      <Header />
      <SearchForm />
      <Footer />
    </section>
  );
}

export default Movies;
