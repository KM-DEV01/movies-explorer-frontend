import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import css from './LoginForm.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '@shared/ui/Input/Input.tsx';
import { ILogin, loginApi, setIsLoggedIn } from '@features/authentication/login';
import { setUser } from '@entities/user';
import { useDispatch } from 'react-redux';

export function LoginForm() {
  const [values, setValues] = useState<ILogin>({ email: '', password: '' });
  const [errors, setErrors] = useState<ILogin>({ email: '', password: '' });
  const [isValid, setIsValid] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isValid) {
      loginApi
        .signin(values)
        .then((res) => {
          dispatch(setUser(res.data));
          dispatch(setIsLoggedIn(true));
          navigate('/', { replace: true });
        })
        .catch((err) => {
          console.log(err.message || JSON.stringify(err));
        });
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { name, value } = target;

    setValues({ ...values, [name]: value });
    if (formRef.current) {
      setIsValid(formRef.current.checkValidity());
    }
    if (target.validity.patternMismatch) {
      setErrors({ ...errors, [name]: 'Поле содержит некорреткное значение' });
      return;
    }
    setErrors({ ...errors, [name]: target.validationMessage });
  };

  return (
    <form className={css.loginForm} ref={formRef} onSubmit={handleSubmit}>
      <div className={css.loginForm__inputs}>
        <Input
          name='email'
          placeholder='Введите e-mail'
          pattern='^[a-z0-9]+@[a-z]+\.{1,1}[a-z]{2,}'
          type='email'
          label='E-mail'
          required={true}
          minLength={2}
          onChange={handleChange}
          value={values.email}
          error={errors.email}
        />
        <Input
          name='password'
          placeholder='Введите пароль'
          type='password'
          label='Пароль'
          required={true}
          minLength={8}
          onChange={handleChange}
          value={values.password}
          error={errors.password}
        />
      </div>
      <div className={css.loginForm__buttons}>
        <button className={css.loginForm__button} disabled={!isValid} type='submit'>
          Войти
        </button>
        <div className={css.loginForm__links}>
          <p className={css.loginForm__caption}>Ещё не зарегистрированы?</p>
          <Link className={css.loginForm__link} to='/sign-up'>
            Регистрация
          </Link>
        </div>
      </div>
    </form>
  );
}
