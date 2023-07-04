import React from 'react';
import './Login.css';

import AuthHeader from '../shared/AuthHeader/AuthHeader';
import Input from '../shared/Input/Input';
import FormButton from '../shared/FormButton/FormButton';

function Login() {
  return (
    <div className="login">
      <AuthHeader greet="Рады видеть!" />
      <form className="login__form">
        <div className="login__inputs">
          <Input inputName="E-mail" inputType="email" />
          <Input inputName="Пароль" inputType="password" />
        </div>
        <FormButton submitButtonText="Войти" authButtonText="Регистрация" authLabel="Ещё не зарегистрированы?" />
      </form>
    </div>
  );
}

export default Login;
