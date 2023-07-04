import React from 'react';
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
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="profile__button">Редактировать</a>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="profile__button profile__button_exit">Выйти из аккаунта</a>
        </div>
      </section>
    </>
  );
}

export default Profile;
