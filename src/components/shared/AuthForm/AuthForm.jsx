import React from 'react';
import './AuthForm.css';
import { Link } from 'react-router-dom';

function AuthForm({ handleSubmit }) {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);
  const isSignupPage = window.location.pathname === '/sign-up';

  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    setValues({ ...values, [name]: value });
    setIsValid(target.closest('form').checkValidity());
    if (target.validity.patternMismatch) {
      setErrors({ ...errors, [name]: 'Поле содержит некорреткное значение' });
      return;
    }
    setErrors({ ...errors, [name]: target.validationMessage });
  };

  return (
    <form
      className={`auth-form ${!isSignupPage && 'auth-form_login'}`}
      onSubmit={(event) => { handleSubmit(event, isValid, values); }}
    >
      <div className="auth-form__inputs">
        {isSignupPage && (
          <>
            <label className="auth-form__label" htmlFor="inputName">
              Имя
              <input
                id="inputName"
                name="name"
                className={`auth-form__input ${errors.name && 'auth-form__input-error'}`}
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
            <span className="auth-form__error">{errors.name}</span>
          </>
        )}
        <label className="auth-form__label" htmlFor="inputEmail">
          E-mail
          <input
            id="inputEmail"
            name="email"
            className={`auth-form__input ${errors.email && 'auth-form__input-error'}`}
            placeholder="Введите e-mail"
            value={values.email || ''}
            pattern={'^[a-z0-9]+@[a-z]+\\.{1,1}[a-z]{2,}'}
            minLength={2}
            type="email"
            required
            onChange={handleChange}
          />
        </label>
        <span className="auth-form__error">{errors.email}</span>

        <label className="auth-form__label" htmlFor="inputPassword">
          Пароль
          <input
            id="inputPassword"
            name="password"
            className={`auth-form__input ${errors.password && 'auth-form__input-error'}`}
            placeholder="Введите пароль"
            value={values.password || ''}
            minLength={8}
            type="password"
            required
            onChange={handleChange}
          />
        </label>
        <span className="auth-form__error">{errors.password}</span>
      </div>
      <div className="auth-form__buttons">
        <button className="auth-form__button" disabled={!isValid} type="submit">{isSignupPage ? 'Зарегистрироваться' : 'Войти'}</button>
        {isSignupPage ? (
          <div className="auth-form__links">
            <p className="auth-form__caption">Уже зарегистрированы?</p>
            <Link to="/sign-in" className="auth-form__link">Войти</Link>
          </div>
        ) : (
          <div className="auth-form__links">
            <p className="auth-form__caption">Ещё не зарегистрированы?</p>
            <Link to="/sign-up" className="auth-form__link">Регистрация</Link>
          </div>
        )}
      </div>
    </form>
  );
}

export default AuthForm;
