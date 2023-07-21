import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

import Header from '../widgets/Header/Header';
import UserContext from '../../context/UserContext';
import mainApi from '../../utils/MainApi';
import InfoPanel from '../shared/InfoPanel/InfoPanel';

function Profile({ loggedIn, setCurrentUser }) {
  const navigate = useNavigate();
  const currentUser = React.useContext(UserContext);
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const [errorMessage, setErrorMessage] = React.useState('');
  const [infoMessage, setInfoMessage] = React.useState('');

  const handelSubmit = (event) => {
    event.preventDefault();
    if (isValid) {
      mainApi.updateUserInfo(values)
        .then((res) => {
          setIsValid(false);
          setCurrentUser(res.data);
          setInfoMessage('Данные обновлены!');
        })
        .catch((err) => {
          setErrorMessage(err.message);
        });
    }
  };

  const handleLogout = () => {
    mainApi.logout()
      .then(() => {
        localStorage.clear();
        loggedIn(false);
        setCurrentUser({});
        navigate('/', { replace: true });
      })
      .catch((err) => {
        setErrorMessage(JSON.stringify(err));
      });
  };

  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    setValues({ ...values, [name]: value });
    setIsValid(target.closest('form').checkValidity() && value.trim() !== currentUser[name]);
    if (target.validity.patternMismatch) {
      setErrors({ ...errors, [name]: 'Поле содержит некорреткное значение' });
      return;
    }
    setErrors({ ...errors, [name]: target.validationMessage });
  };

  React.useEffect(() => {
    setValues({
      ...values,
      name: currentUser.name,
      email: currentUser.email,
    });
  }, [currentUser]);

  React.useEffect(() => {
    if (errorMessage || infoMessage) {
      setTimeout(() => {
        setInfoMessage('');
        setErrorMessage('');
      }, 5 * 1000);
    }
  }, [errorMessage, infoMessage]);

  return (
    <>
      <Header loggedIn />
      <main className="user">
        <section className="profile">
          <h2 className="profile__greet">{`Привет, ${currentUser.name.split(' ')[0]}!`}</h2>
          <form className="profile__form" onSubmit={handelSubmit}>
            <label className="profile__label" htmlFor="inputName">
              Имя
              <input
                id="inputName"
                name="name"
                className="profile__input"
                placeholder="Введите имя"
                value={values.name || ''}
                pattern={'^[A-za-zЁёА-я\\-\\s]+$'}
                minLength={2}
                maxLength={30}
                type="text"
                required
                onChange={handleChange}
              />
            </label>
            <span className="profile__input-error">{errors.name}</span>
            <hr className="profile__stroke" />
            <label className="profile__label" htmlFor="inputEmail">
              E-mail
              <input
                id="inputEmail"
                name="email"
                className="profile__input"
                placeholder="Введите e-mail"
                value={values.email || ''}
                pattern={'^[a-z0-9]+@[a-z]+\\.{1,1}[a-z]{2,}'}
                minLength={2}
                type="email"
                required
                onChange={handleChange}
              />
            </label>
            <span className="profile__input-error">{errors.email}</span>
            <div className="profile__buttons">
              <button className="profile__button" type="submit" disabled={!isValid}>Редактировать</button>
              <button className="profile__button profile__button_exit" type="button" onClick={handleLogout}>Выйти из аккаунта</button>
            </div>
          </form>
        </section>
      </main>
      <InfoPanel infoMessage={infoMessage} errorMessage={errorMessage} />
    </>
  );
}

export default Profile;
