import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ foundMovies, isFilterDuration }) {
  const [movies, setMovies] = React.useState([]);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [visibleCards, setVisibleCards] = React.useState(12);
  const [adder, setAdder] = React.useState(3);
  function showMore() {
    setVisibleCards(visibleCards + adder);
  }

  function displayCards() {
    if (isFilterDuration) {
      setMovies(foundMovies.filter((movie) => movie.duration <= 40));
      return;
    }
    setMovies(foundMovies);
  }

  function changeVisibility() {
    if (windowWidth > 768) {
      setVisibleCards(12);
      return;
    }
    if (windowWidth > 480) {
      setVisibleCards(8);
      return;
    }
    if (windowWidth <= 480) {
      setVisibleCards(5);
    }
  }

  function changeAdder() {
    if (windowWidth > 768) {
      setAdder(3);
      return;
    }
    setAdder(2);
  }

  React.useEffect(() => {
    changeAdder();
    changeVisibility();
  }, []);

  React.useEffect(() => {
    let timeout;
    changeAdder();
    const handleWindowResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        console.log(`таймаут ${windowWidth}`);
        setWindowWidth(window.innerWidth);
      }, 200);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [windowWidth]);

  React.useEffect(() => {
    displayCards();
  }, [isFilterDuration]);

  return (
    <section className="movies-cards">
      <ul className="movies-cards__list">
        {movies
          .slice(0, visibleCards)
          .map((movie) => (<MoviesCard key={movie.id} movie={movie} />))}
      </ul>
      {movies.length > visibleCards && (
        <div className="button-panel">
          <button className="button-panel__more" type="button" onClick={showMore}>Ещё</button>
        </div>
      )}
    </section>
  );
}

export default MoviesCardList;
