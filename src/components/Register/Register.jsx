import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

import AuthHeader from '../shared/AuthHeader/AuthHeader';
import Input from '../shared/Input/Input';
import AuthControls from '../shared/AuthControls/AuthControls';
import mainApi from '../../utils/MainApi';

function Register({ currentUser, isLoggedIn }) {
  const navigate = useNavigate();
  const [isFormValid, setIsFormValid] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [values, setValues] = React.useState({
    name: '',
    email: '',
    password: '',
  });
  const [inputsValidity, setInputsValidity] = React.useState({
    name: false,
    email: false,
    password: false,
  });

  const inputs = [
    {
      id: 1,
      name: 'name',
      type: 'text',
      placeholder: 'Введите имя и фамилию',
      label: 'Имя',
      pattern: '^[A-za-zЁёА-я\\-\\s]{2,30}$',
      errorMessage: 'Имя должно содержать 2-30 символов, только латиницу, кириллицу, пробел или дефис!',
      required: true,
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'Введите электронную почту',
      label: 'E-mail',
      pattern: '^[a-z0-9]+@[a-z]+\\.{1,1}[a-z]{2,}',
      errorMessage: 'Значение должно соответствовать шаблону электронной почты!',
      required: true,
    },
    {
      id: 3,
      name: 'password',
      type: 'password',
      placeholder: 'Введите пароль',
      label: 'Пароль',
      minLength: 8,
      errorMessage: 'Значение должно быть больше 8!',
      required: true,
    },
  ];

  const controlParams = {
    btnText: 'Зарегистрироваться',
    captionText: 'Уже зарегистрированы?',
    linkTo: '/sign-in',
    linkText: 'Войти',
  };

  const onChange = (event) => {
    setValues((prevState) => ({ ...prevState, [event.target.name]: event.target.value }));
    setInputsValidity((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.checkValidity(),
    }));
    setErrorMessage('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isFormValid) {
      setErrorMessage('Форма не валидна!');
      return;
    }
    mainApi.signup(values)
      .then((res) => {
        currentUser(res.data);
        isLoggedIn(true);
        navigate('/movies');
      })
      .catch((err) => { setErrorMessage(err.message); });
  };

  React.useEffect(() => {
    setIsFormValid(Object.values(inputsValidity).every((input) => input));
  }, [inputsValidity]);

  return (
    <div className="register-page">
      <AuthHeader greet="Добро пожаловать!" />
      <main className="auth">
        <section className="register">
          <form className="register__form" onSubmit={handleSubmit}>
            <div className="register__inputs">
              {inputs.map((input) => <Input key={input.id} input={input} onChange={onChange} />)}
            </div>
            <AuthControls params={controlParams} errorMessage={errorMessage} valid={isFormValid} />
          </form>
        </section>
      </main>
    </div>
  );
}

export default Register;
