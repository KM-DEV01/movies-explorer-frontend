import css from './Preloader.module.css';

export function Preloader() {
  return (
    <div className={css.preloader}>
      <div className={css.preloader__container}>
        <span className={css.preloader__round} />
      </div>
    </div>
  );
}
