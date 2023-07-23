import React from 'react';
import './Movies.css';

import Header from '../widgets/Header/Header';
import Footer from '../widgets/Footer/Footer';

import MoviesContent from '../shared/MoviesContent/MoviesContent';

import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';

function Movies({ loggedIn }) {
  const [movies, setMovies] = React.useState([]);
  const [initMovies, setInitMovies] = React.useState([]);

  const [isValid, setIsValid] = React.useState(false);
  const [keyWord, setKeyWord] = React.useState('');
  const [filterShorts, setFilterShorts] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    if (isValid) {
      if (initMovies.length) {
        setMovies(
          initMovies.filter((movie) => movie.nameRU
            .trim()
            .toLowerCase()
            .includes(keyWord.trim().toLowerCase())),
        );
      } else {
        setIsLoading(true);
        Promise.all([mainApi.getSavedMovies(), moviesApi.getMovies()])
          .then(([savedMoviesData, moviesData]) => {
            const receivedMovies = (moviesData.map((movie) => {
              const saved = savedMoviesData.movies.find((save) => save.movieId === movie.id);
              return { ...movie, saved };
            }));
            setInitMovies(receivedMovies);
            setMovies(
              receivedMovies.filter((movie) => movie.nameRU
                .trim()
                .toLowerCase()
                .includes(keyWord.trim().toLowerCase())),
            );
          })
          .catch((err) => {
            setErrorMessage(err.message || JSON.stringify(err));
          })
          .finally(() => {
            setIsLoading(false);
          });
      }
    }
  };

  const handleChange = (event) => {
    setIsSubmitted(false);
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

  const handleSave = (event, movieObj, baseUrl) => {
    event.preventDefault();
    event.stopPropagation();

    if (!movieObj.saved) {
      const movieData = {
        country: movieObj.country,
        director: movieObj.director,
        duration: movieObj.duration,
        year: movieObj.year,
        description: movieObj.year,
        image: baseUrl + movieObj.image.url,
        trailerLink: movieObj.trailerLink,
        nameRU: movieObj.nameRU.trim(),
        nameEN: movieObj.nameEN.trim(),
        thumbnail: baseUrl + movieObj.image.url,
        movieId: movieObj.id,
      };
      return mainApi.createMovie(movieData)
        .then((savedMovie) => {
          setMovies((prevMovies) => prevMovies.map((prevMovie) => {
            if (prevMovie.id === savedMovie.data.movieId) {
              return {
                ...prevMovie,
                saved: savedMovie.data,
              };
            }
            return prevMovie;
          }));
          setInitMovies((prevMovies) => prevMovies.map((prevMovie) => {
            if (prevMovie.id === savedMovie.data.movieId) {
              return {
                ...prevMovie,
                saved: savedMovie.data,
              };
            }
            return prevMovie;
          }));
        })
        .catch((err) => setErrorMessage(err.message || JSON.stringify(err)));
    }
    return mainApi.deleteMovie(movieObj.saved._id)
      .then(() => {
        setMovies((prevMovies) => prevMovies.map((prevMovie) => {
          if (prevMovie.id === movieObj.id) {
            return {
              ...prevMovie,
              saved: undefined,
            };
          }
          return prevMovie;
        }));
        setInitMovies((prevMovies) => prevMovies.map((prevMovie) => {
          if (prevMovie.id === movieObj.id) {
            return {
              ...prevMovie,
              saved: undefined,
            };
          }
          return prevMovie;
        }));
      })
      .catch((err) => setErrorMessage(err.message || JSON.stringify(err)));
  };

  React.useEffect(() => {
    const localKeyWord = localStorage.getItem('localKeyWord');
    const localFilterShorts = JSON.parse(localStorage.getItem('localFilterShorts'));
    const localMovies = JSON.parse(localStorage.getItem('localMovies')) || [];
    const localInitMovies = JSON.parse(localStorage.getItem('localInitMovies')) || [];

    if (localKeyWord) {
      setKeyWord(localKeyWord);
      setIsValid(true);
    }
    if (localFilterShorts) {
      setFilterShorts(localFilterShorts);
    }
    if (localMovies.length) {
      setMovies(localMovies);
    }
    if (localInitMovies.length) {
      setInitMovies(localInitMovies);
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('localKeyWord', keyWord);
    localStorage.setItem('localFilterShorts', filterShorts.toString());
    localStorage.setItem('localMovies', JSON.stringify(movies));
    localStorage.setItem('localInitMovies', JSON.stringify(initMovies));
  }, [keyWord, filterShorts, movies, initMovies]);

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
        onClick={handleSave}
        errorMessage={errorMessage}
        movies={filterShorts ? movies.filter((movie) => movie.duration <= 40) : movies}
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

export default Movies;
