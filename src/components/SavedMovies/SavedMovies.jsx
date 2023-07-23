import React from 'react';
import './SavedMovies.css';

import Header from '../widgets/Header/Header';
import Footer from '../widgets/Footer/Footer';

import MoviesContent from '../shared/MoviesContent/MoviesContent';

import mainApi from '../../utils/MainApi';

function SavedMovies({ loggedIn }) {
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [initSavedMovies, setInitSavedMovies] = React.useState([]);

  const [isValid, setIsValid] = React.useState(false);
  const [keyWord, setKeyWord] = React.useState('');
  const [filterShorts, setFilterShorts] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const [movies, setMovies] = React.useState([]);
  const [initMovies, setInitMovies] = React.useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    if (isValid) {
      setSavedMovies(initSavedMovies
        .filter((movie) => movie.nameRU
          .trim()
          .toLowerCase()
          .includes(keyWord.trim().toLowerCase())));
    }
  };

  const handleChange = (event) => {
    setIsSubmitted(false);
    setKeyWord(event.target.value);
    if (!event.target.value) {
      setIsValid(false);
      setSavedMovies(initSavedMovies);
    } else {
      setErrorMessage('');
      setIsValid(true);
    }
  };

  const handleChecked = () => {
    setFilterShorts(!filterShorts);
  };

  const handleDelete = (event, movieId) => {
    event.preventDefault();
    event.stopPropagation();
    return mainApi.deleteMovie(movieId)
      .then(() => {
        setSavedMovies((prevState) => prevState.filter((movie) => movie._id !== movieId));
        setInitSavedMovies((prevState) => prevState.filter((movie) => movie._id !== movieId));
        // Для удаления из локальных данных
        setMovies((prevMovies) => prevMovies.map((prevMovie) => {
          if (prevMovie.saved && prevMovie.saved._id === movieId) {
            return {
              ...prevMovie,
              saved: undefined,
            };
          }
          return prevMovie;
        }));
        setInitMovies((prevMovies) => prevMovies.map((prevMovie) => {
          if (prevMovie.saved && prevMovie.saved._id === movieId) {
            return {
              ...prevMovie,
              saved: undefined,
            };
          }
          return prevMovie;
        }));
      })
      .catch((err) => {
        setErrorMessage(err.message || JSON.stringify(err));
      });
  };

  React.useEffect(() => {
    mainApi.getSavedMovies()
      .then((res) => {
        setInitSavedMovies(res.movies);
        setSavedMovies(res.movies);
      })
      .catch((err) => {
        setErrorMessage(err.message || JSON.stringify(err));
      })
      .finally(() => {
        setIsLoading(false);
      });

    const localMovies = JSON.parse(localStorage.getItem('localMovies')) || [];
    const localInitMovies = JSON.parse(localStorage.getItem('localInitMovies')) || [];
    if (localMovies.length) {
      setMovies(localMovies);
    }
    if (localInitMovies.length) {
      setInitMovies(localInitMovies);
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('localMovies', JSON.stringify(movies));
    localStorage.setItem('localInitMovies', JSON.stringify(initMovies));
  }, [movies, initMovies]);

  React.useEffect(() => {
    if (errorMessage) {
      setTimeout(() => {
        setErrorMessage('');
      }, 5 * 1000);
    }
  }, [errorMessage]);

  return (
    <div className="movies">
      <Header loggedIn={loggedIn} />
      <MoviesContent
        onSubmit={handleSubmit}
        onChange={handleChange}
        onChecked={handleChecked}
        onClick={handleDelete}
        errorMessage={errorMessage}
        movies={filterShorts ? savedMovies.filter((movie) => movie.duration <= 40) : savedMovies}
        filter={filterShorts}
        keyWord={keyWord}
        isLoading={isLoading}
        isValid={isValid}
        isSubmitted={isSubmitted}
      />
      <Footer />
    </div>
  );
}

export default SavedMovies;
