import React from 'react';
import './Movies.css';

import Header from '../widgets/Header/Header';
import Footer from '../widgets/Footer/Footer';

import SearchForm from '../shared/SearchForm/SearchForm';
import SearchResult from '../shared/SearchResult/SearchResult';

function Movies() {
  const initStates = {
    keyWord: '',
    isSearched: false,
    foundMovies: [],
    isFilterDuration: false,
    isValid: false,
  };

  const localData = {
    ...initStates,
    ...JSON.parse(localStorage.getItem('savedData')),
  };

  // Заполняются из локалстореджа
  const [keyWord, setKeyWord] = React.useState(localData.keyWord);
  const [isSearched, setIsSearched] = React.useState(localData.isSearched);
  const [foundMovies, setFoundMovies] = React.useState(localData.foundMovies);
  const [isFilterDuration, setIsFilterDuration] = React.useState(localData.isFilterDuration);
  const [isValid, setIsValid] = React.useState(localData.isValid);

  const [isLoading, setIsLoading] = React.useState(false);
  const [isFailed, setIsFailed] = React.useState(false);

  const saveParams = {
    keyWord,
    isSearched,
    foundMovies,
    isFilterDuration,
    isValid,
  };

  const saveLocals = () => {
    localStorage.setItem('savedData', JSON.stringify(saveParams));
  };

  React.useEffect(() => {
    saveLocals();
  }, [saveParams]);

  return (
    <div className="movies-page">
      <Header />
      <main className="movies">
        <SearchForm
          isValid={isValid}
          setIsValid={setIsValid}
          keyWord={keyWord}
          setKeyWord={setKeyWord}
          setIsSearched={setIsSearched}
          setFoundMovies={setFoundMovies}
          setIsLoading={setIsLoading}
          setIsFailed={setIsFailed}
          isFilterDuration={isFilterDuration}
          setIsFilterDuration={setIsFilterDuration}
        />
        <SearchResult
          isSearched={isSearched}
          isLoading={isLoading}
          foundMovies={foundMovies}
          isFailed={isFailed}
          isFilterDuration={isFilterDuration}
        />
      </main>
      <Footer />
    </div>
  );
}

export default Movies;
