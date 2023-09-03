import { Link, useNavigate } from 'react-router-dom';
import css from './Unauthorized.module.css';
export function Unauthorized() {
  const navigate = useNavigate();
  return (
    <nav className={css.unauthorized__navs}>
      <Link className={css.unauthorized__link} to='/sign-up' type='button'>
        Регистрация
      </Link>
      <button
        className={css.unauthorized__button}
        type='button'
        onClick={() => navigate('/sign-in')}
      >
        Войти
      </button>
    </nav>
  );
}
