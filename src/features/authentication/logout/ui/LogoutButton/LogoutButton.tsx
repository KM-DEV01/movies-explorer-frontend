import css from './LogoutButton.module.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setIsLoggedIn } from '@features/authentication/login';
import { initialUserState, setUser } from '@entities/user';
import { logoutApi } from '@features/authentication/logout/api/logoutApi.ts';
export function LogoutButton() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    logoutApi
      .logout()
      .then(() => {
        localStorage.clear();
        dispatch(setIsLoggedIn(false));
        dispatch(setUser(initialUserState));
        navigate('/', { replace: true });
      })
      .catch((err) => {
        console.log(err.message || JSON.stringify(err));
      });
  };

  return (
    <button className={css.logout_button} type='button' onClick={handleLogout}>
      Выйти из аккаунта
    </button>
  );
}
