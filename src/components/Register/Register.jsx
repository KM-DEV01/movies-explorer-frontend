import React from 'react';
import './Register.css';

import AuthHeader from '../shared/AuthHeader/AuthHeader';
import Input from '../shared/Input/Input';
import AuthControls from '../shared/AuthControls/AuthControls';

function Register() {
  return (
    <div className="register-page">
      <AuthHeader greet="Добро пожаловать!" />
      <main className="auth">
        <section className="register">
          <form className="register__form">
            <div className="register__inputs">
              <Input inputName="Имя" placeholder="Иванов Иван" />
              <Input inputName="E-mail" inputType="email" placeholder="example@gmail.com" />
              <Input inputName="Пароль" inputType="password" errorText="Что-то пошло не так" />
            </div>
            <AuthControls
              btnText="Зарегистрироваться"
              captionText="Уже зарегистрированы?"
              linkTo="/sign-in"
              linkText="Войти"
            />
          </form>
        </section>
      </main>
    </div>
  );
}

export default Register;
