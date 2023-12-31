import React from 'react';
import { Link } from 'react-router-dom';
import './AboutMe.css';
import bioPhoto from '../../../images/others/bio.jpg';

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <hr className="about-me__stroke" />
      <div className="about-me__container">
        <div className="about-me__info">
          <h3 className="about-me__name">Райан</h3>
          <p className="about-me__caption">Фронтенд-разработчик, актер, 42 года</p>
          <p className="about-me__text">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь.
            Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
            С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по
            веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <Link to="https://github.com/KM-ForProjects" className="about-me__link" target="_blank" rel="noopener noreferrer">Github</Link>
        </div>
        <img className="about-me__avatar" src={bioPhoto} alt="Фото студента" />
      </div>
    </section>
  );
}

export default AboutMe;
