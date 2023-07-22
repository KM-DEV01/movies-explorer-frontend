import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

import AuthHeader from '../shared/AuthHeader/AuthHeader';
import mainApi from '../../utils/MainApi';
import AuthForm from '../shared/AuthForm/AuthForm';
import InfoPanel from '../shared/InfoPanel/InfoPanel';

function Register({ currentUser, isLoggedIn }) {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = React.useState('');

  const handleSubmit = (event, isValid, values) => {
    event.preventDefault();
    if (isValid) {
      mainApi.signup(values)
        .then((res) => {
          currentUser(res.data);
          isLoggedIn(true);
          navigate('/movies', { replace: true });
        })
        .catch((err) => {
          setErrorMessage(err.message || JSON.stringify(err));
        });
    }
  };

  React.useEffect(() => {
    if (errorMessage) {
      setTimeout(() => {
        setErrorMessage('');
      }, 5 * 1000);
    }
  }, [errorMessage]);

  return (
    <div className="register-page">
      <AuthHeader greet="Добро пожаловать!" />
      <main className="auth">
        <section className="register">
          <AuthForm handleSubmit={handleSubmit} />
        </section>
      </main>
      <InfoPanel errorMessage={errorMessage} />
    </div>
  );
}

export default Register;
