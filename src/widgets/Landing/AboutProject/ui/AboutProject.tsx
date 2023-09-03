import css from './AboutProject.module.css';
import classNames from 'classnames';

export function AboutProject() {
  return (
    <section className={css.aboutProject} id='about'>
      <h2 className={css.aboutProject__title}>О проекте</h2>
      <hr className={css.aboutProject__stroke} />
      <div className={css.aboutProject__info}>
        <ul className={css.aboutProject__list}>
          Дипломный проект включал 5 этапов
          <li className={css.aboutProject__listElement}>
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные
            доработки.
          </li>
        </ul>
        <ul className={css.aboutProject__list}>
          На выполнение диплома ушло 5 недель
          <li className={css.aboutProject__listElement}>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы
            успешно защититься.
          </li>
        </ul>
      </div>
      <div className={css.aboutProject__progress}>
        <div>
          <div className={classNames(css.aboutProject__line, css.aboutProject__line_short)}>
            <p>1 неделя</p>
          </div>
          <p className={css.aboutProject__caption}>Back-end</p>
        </div>
        <div>
          <div className={classNames(css.aboutProject__line, css.aboutProject__line_large)}>
            <p>4 недели</p>
          </div>
          <p className={css.aboutProject__caption}>Front-end</p>
        </div>
      </div>
    </section>
  );
}
