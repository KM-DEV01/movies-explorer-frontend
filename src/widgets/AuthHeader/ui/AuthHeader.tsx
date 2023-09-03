import { useNavigate } from 'react-router-dom';
import css from './AuthHeader.module.css';
import logo from 'shared/assets/images/logo/logo.png';

interface IProps {
  greet: string;
}

export function AuthHeader({ greet }: IProps) {
  const navigate = useNavigate();
  return (
    <header className={css.authHeader}>
      <button type='button' onClick={() => navigate('/')}>
        <img className={css.authHeader__logo} src={logo} alt='Логотип' />
      </button>
      <h2 className={css.authHeader__title}>{greet}</h2>
    </header>
  );
}
