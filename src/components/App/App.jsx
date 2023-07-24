import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute';
import UserContext from '../../context/UserContext';
import mainApi from '../../utils/MainApi';
import Preloader from '../shared/Preloader/Preloader';

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isTokenChecked, setIsTokenChecked] = React.useState(false);

  React.useEffect(() => {
    setIsTokenChecked(false);
    mainApi.getUserInfo()
      .then((res) => {
        setCurrentUser(res.data);
        setIsLoggedIn(true);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsTokenChecked(true);
      });
  }, []);
  return (
    !isTokenChecked ? (<Preloader />) : (
      <UserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/" element={<Main loggedIn={isLoggedIn} />} />
          <Route element={<ProtectedRouteElement loggedIn={isLoggedIn} />}>
            <Route path="/movies" element={<Movies loggedIn={isLoggedIn} />} />
            <Route path="/saved-movies" element={<SavedMovies loggedIn={isLoggedIn} />} />
            <Route path="/profile" element={<Profile loggedIn={setIsLoggedIn} setCurrentUser={setCurrentUser} />} />
          </Route>
          <Route element={<ProtectedRouteElement loggedIn={!isLoggedIn} />}>
            <Route path="/sign-up" element={<Register currentUser={setCurrentUser} isLoggedIn={setIsLoggedIn} />} />
            <Route path="/sign-in" element={<Login currentUser={setCurrentUser} isLoggedIn={setIsLoggedIn} />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </UserContext.Provider>
    )
  );
}

export default App;
