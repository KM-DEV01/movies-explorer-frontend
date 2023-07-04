import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

// eslint-disable-next-line react/prop-types
function MoviesCardList({ isRemovable = false }) {
  return (
    <section className="movies-cards">
      <ul className="movies-cards__list">
        {!isRemovable ? (
          <>
            <MoviesCard isLiked />
            <MoviesCard isLiked />
            <MoviesCard isLiked />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard isLiked />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
          </>
        ) : (
          <>
            <MoviesCard isRemovable />
            <MoviesCard isRemovable />
            <MoviesCard isRemovable />
          </>
        )}
      </ul>
    </section>
  );
}

export default MoviesCardList;
