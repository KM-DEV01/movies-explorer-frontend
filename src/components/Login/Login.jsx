import React from 'react';
import './Login.css';

import AuthHeader from '../shared/AuthHeader/AuthHeader';
import Input from '../shared/Input/Input';
import AuthControls from '../shared/AuthControls/AuthControls';

function Login() {
  return (
    <div className="login-page">
      <AuthHeader greet="Рады видеть!" />
      <main className="auth">
        <section className="login">
          <form className="login__form">
            <div className="login__inputs">
              <Input inputName="E-mail" inputType="email" placeholder="example@gmail.com" />
              <Input inputName="Пароль" inputType="password" />
            </div>
            <AuthControls
              btnText="Войти"
              captionText="Ещё не зарегистрированы?"
              linkTo="/sign-up"
              linkText="Регистрация"
            />
          </form>
        </section>
      </main>
    </div>
  );
}

export default Login;
