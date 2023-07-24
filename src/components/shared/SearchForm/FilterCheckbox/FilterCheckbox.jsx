import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ onChecked, filter }) {
  return (
    <div className="filter">
      <label className="filter__switch" htmlFor="filter-checkbox">
        <input
          className="filter__switch-checkbox"
          type="checkbox"
          id="filter-checkbox"
          onChange={onChecked}
          checked={filter}
        />
        <span className="filter__switch-slider" />
      </label>
      <p className="filter__property">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
