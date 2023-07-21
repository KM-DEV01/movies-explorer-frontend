import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

import AuthHeader from '../shared/AuthHeader/AuthHeader';
import Input from '../shared/Input/Input';
import AuthControls from '../shared/AuthControls/AuthControls';
import mainApi from '../../utils/MainApi';

function Login({ currentUser, isLoggedIn }) {
  const navigate = useNavigate();
  const [isFormValid, setIsFormValid] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [values, setValues] = React.useState({
    email: '',
    password: '',
  });
  const [inputsValidity, setInputsValidity] = React.useState({
    email: false,
    password: false,
  });

  const inputs = [
    {
      id: 1,
      name: 'email',
      type: 'email',
      placeholder: 'Введите электронную почту',
      label: 'E-mail',
      pattern: '^[a-z0-9]+@[a-z]+\\.{1,1}[a-z]{2,}',
      errorMessage: 'Значение должно соответствовать шаблону электронной почты!',
      required: true,
    },
    {
      id: 2,
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
    btnText: 'Войти',
    captionText: 'Ещё не зарегистрированы?',
    linkTo: '/sign-up',
    linkText: 'Регистрация',
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
    mainApi.signin(values)
      .then((res) => {
        currentUser(res.data);
        isLoggedIn(true);
        navigate('/movies');
      })
      .catch((err) => {
        setErrorMessage(err.message);
      });
  };

  React.useEffect(() => {
    setIsFormValid(Object.values(inputsValidity).every((input) => input));
  }, [inputsValidity]);

  return (
    <div className="login-page">
      <AuthHeader greet="Рады видеть!" />
      <main className="auth">
        <section className="login">
          <form className="login__form" onSubmit={handleSubmit}>
            <div className="login__inputs">
              {inputs.map((input) => <Input key={input.id} input={input} onChange={onChange} />)}
            </div>
            <AuthControls params={controlParams} errorMessage={errorMessage} valid={isFormValid} />
          </form>
        </section>
      </main>
    </div>
  );
}

export default Login;
