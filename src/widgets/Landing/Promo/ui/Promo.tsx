import css from './Promo.module.css';
import promoLogo from '@shared/assets/images/logo/landing-logo-min.svg';

export function Promo() {
  return (
    <section className={css.promo}>
      <div className={css.promo__container}>
        <h1 className={css.promo__title}>
          Учебный проект студента факультета Веб&#8209;разработки.
        </h1>
        <p className={css.promo__subtitle}>
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <a className={css.promo__link} href='#about'>
          Узнать больше
        </a>
      </div>
      <img className={css.promo__logo} src={promoLogo} alt='Промо' />
    </section>
  );
}
