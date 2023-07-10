import React from 'react';
import './SearchForm.css';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section className="search">
      <form className="search__form">
        <div className="search__container">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label className="search__icon" />
          <input className="search__input" id="search-input" type="text" placeholder="Фильм" />
          <button className="search__button" type="submit">Найти</button>
        </div>
        <hr className="search__stroke" />
        <FilterCheckbox />
      </form>
    </section>
  );
}

export default SearchForm;
