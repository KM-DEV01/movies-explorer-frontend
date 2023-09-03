import { Link } from 'react-router-dom';
import css from './AboutMe.module.css';

import bioPhoto from '@shared/assets/images/others/bio.jpg';

export function AboutMe() {
  return (
    <section className={css.aboutMe}>
      <h2 className={css.aboutMe__title}>Студент</h2>
      <hr className={css.aboutMe__stroke} />
      <div className={css.aboutMe__container}>
        <div className={css.aboutMe__info}>
          <h3 className={css.aboutMe__name}>Райан</h3>
          <p className={css.aboutMe__caption}>Фронтенд-разработчик, актер, 42 года</p>
          <p className={css.aboutMe__text}>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь.
            Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал
            в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься
            фриланс-заказами и ушёл с постоянной работы.
          </p>
          <Link
            className={css.aboutMe__link}
            to='https://github.com/KM-ForProjects'
            target='_blank'
            rel='noopener noreferrer'
          >
            Github
          </Link>
        </div>
        <img className={css.aboutMe__avatar} src={bioPhoto} alt='Фото студента' />
      </div>
    </section>
  );
}
