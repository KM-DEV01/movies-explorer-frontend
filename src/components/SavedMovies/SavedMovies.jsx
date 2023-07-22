import React from 'react';
import './SavedMovies.css';

import Header from '../widgets/Header/Header';
import Footer from '../widgets/Footer/Footer';

import MoviesContent from '../shared/MoviesContent/MoviesContent';

import mainApi from '../../utils/MainApi';

function SavedMovies({ loggedIn }) {
  const [isValid, setIsValid] = React.useState(false);
  const [keyWord, setKeyWord] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [savedShorts, setSavedShorts] = React.useState([]);
  const [filterShorts, setFilterShorts] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValid) {
      return setSavedMovies(
        (prevState) => prevState
          .filter((movie) => movie.nameRU
            .trim()
            .toLowerCase()
            .includes(keyWord.trim().toLowerCase())),
      );
    }
    return setErrorMessage('Нужно ввести ключевое слово');
  };

  const handleChange = (event) => {
    setKeyWord(event.target.value);
    if (event.target.value) {
      setErrorMessage('');
      setIsValid(true);
      return;
    }
    setIsValid(false);
  };

  const handleChecked = () => {
    setFilterShorts(!filterShorts);
  };

  const handleDelete = (event, movieId) => {
    event.preventDefault();
    event.stopPropagation();
    return mainApi.deleteMovie(movieId)
      .then(() => {
        setSavedShorts((prevState) => prevState.filter((movie) => movie._id !== movieId));
        setSavedMovies((prevState) => prevState.filter((movie) => movie._id !== movieId));
      })
      .catch((err) => {
        setErrorMessage(err.message || JSON.stringify(err));
      });
  };

  React.useEffect(() => {
    mainApi.getSavedMovies()
      .then((res) => {
        setSavedMovies(res.movies);
        setSavedShorts(res.movies.filter((movie) => movie.duration <= 40));
      })
      .catch((err) => {
        setErrorMessage(err.message || JSON.stringify(err));
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

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
        movies={filterShorts ? savedShorts : savedMovies}
        filter={filterShorts}
        keyWord={keyWord}
        isLoading={isLoading}
      />
      <Footer />
    </div>
  );
}

export default SavedMovies;
