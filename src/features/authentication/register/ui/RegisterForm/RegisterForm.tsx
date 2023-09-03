import css from './RegisterForm.module.css';
import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IRegister } from '@features/authentication/register';
import { Input } from '@shared/ui/Input/Input.tsx';
import { registerApi } from '@features/authentication/register/api/registerApi.ts';
import { useDispatch } from 'react-redux';
import { setUser } from '@entities/user';
import { setIsLoggedIn } from '@features/authentication/login';
export function RegisterForm() {
  const [values, setValues] = useState<IRegister>({ email: '', password: '', name: '' });
  const [errors, setErrors] = useState<IRegister>({ email: '', password: '', name: '' });
  const [isValid, setIsValid] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isValid) {
      registerApi
        .signup(values)
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
    <form className={css.registerForm} ref={formRef} onSubmit={handleSubmit}>
      <div className={css.registerForm__inputs}>
        <Input
          name='name'
          placeholder='Введите имя'
          pattern='^[A-za-zЁёА-я\-\s]+$'
          type='text'
          label='Имя'
          required={true}
          minLength={2}
          maxLength={30}
          onChange={handleChange}
          value={values.name}
          error={errors.name}
        />
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
      <div className={css.registerForm__buttons}>
        <button className={css.registerForm__button} disabled={!isValid} type='submit'>
          Зарегистрироваться
        </button>
        <div className={css.registerForm__links}>
          <p className={css.registerForm__caption}>Уже зарегистрированы?</p>
          <Link className={css.registerForm__link} to='/sign-in'>
            Войти
          </Link>
        </div>
      </div>
    </form>
  );
}
