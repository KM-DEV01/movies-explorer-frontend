import React from 'react';
import './Login.css';
import AuthHeader from '../shared/AuthHeader/AuthHeader';
import Input from '../shared/Input/Input';
import AuthControls from '../shared/AuthControls/AuthControls';

function Login() {
  return (
    <div className="login">
      <AuthHeader greet="Рады видеть!" />
      <form className="login__form">
        <div className="login__inputs">
          <Input inputName="E-mail" inputType="email" />
          <Input inputName="Пароль" inputType="password" />
        </div>
        <AuthControls
          btnText="Войти"
          captionText="Ещё не зарегистрированы?"
          linkTo="/sign-up"
          linkText="Регистрация"
        />
      </form>
    </div>
  );
}

export default Login;
