import { useNavigate } from 'react-router-dom';
import css from './NotFound.module.css';

export function NotFound() {
  const navigate = useNavigate();

  return (
    <section className={css.notFound}>
      <div className={css.notFound__info}>
        <h2 className={css.notFound__info}>404</h2>
        <p className={css.notFound__text}>Страница не найдена</p>
      </div>
      <button className={css.notFound__button} type='button' onClick={() => navigate(-1)}>
        Назад
      </button>
    </section>
  );
}
