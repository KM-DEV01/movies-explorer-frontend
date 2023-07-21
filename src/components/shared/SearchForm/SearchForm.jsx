import React from 'react';
import './SearchForm.css';

import FilterCheckbox from './FilterCheckbox/FilterCheckbox';

function SearchForm({
  onSubmit,
  onChange,
  onChecked,
  keyWord,
  filter,
}) {
  return (
    <section className="search">
      <form className="search__form" onSubmit={onSubmit}>
        <div className="search__container">
          <span className="search__icon" />
          <input className="search__input" type="text" placeholder="Фильм" onChange={onChange} value={keyWord} />
          <button className="search__button" type="submit">Найти</button>
        </div>
        <hr className="search__stroke" />
        <FilterCheckbox onChecked={onChecked} filter={filter} />
      </form>
    </section>
  );
}

export default SearchForm;
