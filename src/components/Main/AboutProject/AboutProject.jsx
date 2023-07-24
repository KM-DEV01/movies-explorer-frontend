import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about-project" id="about">
      <h2 className="about-project__title">О проекте</h2>
      <hr className="about-project__stroke" />
      <div className="about-project__info">
        <ul className="about-project__list">
          Дипломный проект включал 5 этапов
          <li className="about-project__list-element">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </li>
        </ul>
        <ul className="about-project__list">
          На выполнение диплома ушло 5 недель
          <li className="about-project__list-element">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </li>
        </ul>
      </div>
      <div className="about-project__progress">
        <div>
          <div className="about-project__line about-project__line_short">
            <p>1 неделя</p>
          </div>
          <p className="about-project__caption">Back-end</p>
        </div>
        <div>
          <div className="about-project__line about-project__line_large">
            <p>4 недели</p>
          </div>
          <p className="about-project__caption">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
