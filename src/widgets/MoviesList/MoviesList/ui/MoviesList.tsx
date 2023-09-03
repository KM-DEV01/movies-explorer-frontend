import { IMovie, MovieCard } from '@entities/movie';
import css from './MoviesList.module.css';
import { SaveMovieButton } from '@features/movie/saveMovie';
import { useEffect, useState } from 'react';
import { adder as configAdder, visibleCards as configVisibleCards } from '../consts/conf.ts';

interface Props {
  movies: Array<IMovie>;
}

export function MoviesList({ movies }: Props) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [visibleCards, setVisibleCards] = useState(12);
  const [adder, setAdder] = useState(3);
  let timeout: ReturnType<typeof setTimeout>;

  const handleWindowResize = () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setWindowWidth(window.innerWidth);
    }, 200);
  };

  const changeAdder = () => {
    const { desktop, tablet } = configAdder;
    if (windowWidth > 768) {
      setAdder(desktop);
      return;
    }
    setAdder(tablet);
  };

  const showMore = () => {
    setVisibleCards((prevValue) => prevValue + adder);
  };

  const changeVisibility = () => {
    const { desktop, tablet, mobile } = configVisibleCards;
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

  useEffect(() => {
    changeAdder();
    changeVisibility();
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
      clearTimeout(timeout);
    };
  }, [windowWidth]);

  if (!movies.length) {
    return;
  }

  return (
    <section className={css.moviesCards}>
      <ul className={css.moviesCards__list}>
        {movies.slice(0, visibleCards).map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            interactButton={<SaveMovieButton movie={movie} />}
          />
        ))}
      </ul>
      {movies.length > visibleCards && (
        <div className={css.buttonPanel}>
          <button className={css.buttonPanel__button} type='button' onClick={showMore}>
            Ещё
          </button>
        </div>
      )}
    </section>
  );
}
