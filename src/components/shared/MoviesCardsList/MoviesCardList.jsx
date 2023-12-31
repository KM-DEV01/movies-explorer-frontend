import React from 'react';
import './MoviesCardList.css';
import { useLocation } from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard';

import { visibleCardsConf, adderConf } from '../../../consts/visibilityOptions';

function MoviesCardList({ movies, onClick }) {
  const [savedPage, setSavedPage] = React.useState(false);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [visibleCards, setVisibleCards] = React.useState(12);
  const [adder, setAdder] = React.useState(3);

  const location = useLocation();
  let timeout;

  const handleWindowResize = () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setWindowWidth(window.innerWidth);
    }, 200);
  };

  const showMore = () => {
    setVisibleCards((prevValue) => prevValue + adder);
  };

  const changeVisibility = () => {
    const { desktop, tablet, mobile } = visibleCardsConf;
    if (windowWidth > 768) {
      setVisibleCards(desktop);
      return;
    }
    if (windowWidth > 480) {
      setVisibleCards(tablet);
      return;
    }
    if (windowWidth <= 480) {
      setVisibleCards(mobile);
    }
  };

  const changeAdder = () => {
    const { desktop, tablet } = adderConf;
    if (windowWidth > 768) {
      setAdder(desktop);
      return;
    }
    setAdder(tablet);
  };

  React.useEffect(() => {
    setSavedPage(location.pathname === '/saved-movies');
  }, []);

  React.useEffect(() => {
    if (!savedPage) {
      changeAdder();
      changeVisibility();
      window.addEventListener('resize', handleWindowResize);
    }
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [windowWidth]);

  return (
    <section className="movies-cards" hidden={!movies.length}>
      <ul className="movies-cards__list">
        { movies.slice(0, savedPage ? movies.length : visibleCards)
          .map((movie) => (
            <MovieCard
              key={movie.id || movie._id}
              movie={movie}
              savedPage={savedPage}
              onClick={onClick}
            />
          ))}
      </ul>
      {(movies.length > visibleCards && !savedPage) && (
        <div className="button-panel">
          <button className="button-panel__button" type="button" onClick={showMore}>Ещё</button>
        </div>
      )}
    </section>
  );
}

export default MoviesCardList;
