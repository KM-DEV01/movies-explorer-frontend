import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <form className="search">
      <div className="search__container">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label className="search__icon" htmlFor="search-input" />
        <input className="search__input" id="search-input" type="text" placeholder="Фильм" />
        <button className="search__button" type="submit">Найти</button>
      </div>
      <hr className="search__stroke" />
      <FilterCheckbox />
    </form>
  );
}

export default SearchForm;
