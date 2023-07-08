import React from 'react';
import './Register.css';
import AuthHeader from '../shared/AuthHeader/AuthHeader';
import Input from '../shared/Input/Input';
import AuthControls from '../shared/AuthControls/AuthControls';

function Register() {
  return (
    <div className="register">
      <AuthHeader greet="Добро пожаловать!" />
      <form className="register__form">
        <div className="register__inputs">
          <Input inputName="Имя" />
          <Input inputName="E-mail" inputType="email" />
          <Input inputName="Пароль" inputType="password" errorText="Что-то пошло не так" />
        </div>
        <AuthControls
          btnText="Зарегистрироваться"
          captionText="Уже зарегистрированы?"
          linkTo="/sign-in"
          linkText="Войти"
        />
      </form>
    </div>
  );
}

export default Register;
