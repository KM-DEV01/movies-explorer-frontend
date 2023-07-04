import React from 'react';
import './Register.css';

import AuthHeader from '../shared/AuthHeader/AuthHeader';
import Input from '../shared/Input/Input';
import FormButton from '../shared/FormButton/FormButton';

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
        <FormButton submitButtonText="Зарегистрироваться" authButtonText="Войти" authLabel="Уже зарегистрированы?" />
      </form>
    </div>
  );
}

export default Register;
