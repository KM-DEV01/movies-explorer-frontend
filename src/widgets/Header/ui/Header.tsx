import './Header.css';

import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from '@app/store';
import { Authorized, Unauthorized } from '@widgets/Header/ui/Navigation';
import logo from '@shared/assets/images/logo/logo.png';

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const isMainPage = location.pathname === '/';
  const isLoggedIn = useSelector((state: RootState) => state.login.isLoggedIn);

  return (
    <header className={`header ${isMainPage && 'header-main'}`}>
      <button className='header__button' type='button' onClick={() => navigate('/')}>
        <img className='header__logo' src={logo} alt='Логотип учебного проекта' />
      </button>
      {isLoggedIn ? <Authorized /> : <Unauthorized />}
    </header>
  );
}
