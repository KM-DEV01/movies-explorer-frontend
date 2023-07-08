import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

import Header from '../widgets/Header/Header';

function Profile() {
  return (
    <>
      <Header />
      <section className="profile">
        <h2 className="profile__greet">Привет, Райан!</h2>
        <div className="profile__info">
          <p>Имя</p>
          <p>Райан</p>
        </div>
        <hr className="profile__stroke" />
        <div className="profile__info">
          <p>E-mail</p>
          <p>gosling@mail.ru</p>
        </div>
        <div className="profile__buttons">
          <button className="profile__button" type="submit">Редактировать</button>
          <Link to="/sign-in" className="profile__button profile__button_exit">Выйти из аккаунта</Link>
        </div>
      </section>
    </>
  );
}

export default Profile;
