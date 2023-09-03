import React from 'react';
import './styles/index.css';

import { Route, Routes } from 'react-router-dom';
import { Main } from '@pages/Main';
import { Preloader } from '@widgets/Preloader';
import { Login } from '@pages/Login';
import { Register } from '@pages/Register';
import { useDispatch } from 'react-redux';
import { Profile } from '@pages/Profile';
import { SavedMovies } from '@pages/SavedMovies';
import { Movies } from '@pages/Movies';
import { ProtectedRouteElement } from '@app/provider/ProtectedRoute';
import { NotFound } from '@pages/NotFound';

import { setUser, userApi } from '@entities/user';
import { setIsLoggedIn } from '@features/authentication/login';

export function App() {
  const [isTokenChecked, setIsTokenChecked] = React.useState(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    setIsTokenChecked(false);
    userApi
      .getUserInfo()
      .then((res) => {
        dispatch(setUser(res.data));
        dispatch(setIsLoggedIn(true));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsTokenChecked(true);
      });
  }, []);

  return !isTokenChecked ? (
    <Preloader />
  ) : (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route element={<ProtectedRouteElement secondaryProtection={false} />}>
        <Route path='/movies' element={<Movies />} />
        <Route path='/saved-movies' element={<SavedMovies />} />
        <Route path='/profile' element={<Profile />} />
      </Route>
      <Route element={<ProtectedRouteElement secondaryProtection={true} />}>
        <Route path='/sign-in' element={<Login />} />
        <Route path='/sign-up' element={<Register />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}
