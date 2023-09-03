import css from './Techs.module.css';

export function Techs() {
  return (
    <section className={css.techs}>
      <h2 className={css.techs__title}>Технологии</h2>
      <hr className={css.techs__stroke} />
      <div className={css.techs__info}>
        <h3 className={css.techs__infoTitle}>7 технологий</h3>
        <p className={css.techs__infoText}>
          На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
        </p>
        <ul className={css.techs__list}>
          <li className={css.techs__listElement}>HTML</li>
          <li className={css.techs__listElement}>CSS</li>
          <li className={css.techs__listElement}>JS</li>
          <li className={css.techs__listElement}>React</li>
          <li className={css.techs__listElement}>Git</li>
          <li className={css.techs__listElement}>Express.js</li>
          <li className={css.techs__listElement}>mongoDB</li>
        </ul>
      </div>
    </section>
  );
}
