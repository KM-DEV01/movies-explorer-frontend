import { Input } from '@shared/ui/Input/Input.tsx';
import React, { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { IUpdateUser, updateUser, userApi } from '@entities/user';
import { useDispatch, useSelector } from 'react-redux';
import css from './ProfileForm.module.css';
import { RootState } from '@app/store';

export function ProfileForm() {
  const [values, setValues] = useState<IUpdateUser>({ email: '', name: '' });
  const [errors, setErrors] = useState<IUpdateUser>({ email: '', name: '' });
  const [isValid, setIsValid] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  const handelSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isValid) {
      userApi
        .updateUserInfo(values)
        .then((res) => {
          setIsValid(false);
          dispatch(updateUser(res.data));
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

  React.useEffect(() => {
    setValues({
      ...values,
      name: user.name,
      email: user.email,
    });
  }, [user]);

  return (
    <form className={css.profile_form} ref={formRef} onSubmit={handelSubmit}>
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
      <hr className={css.profile_form__stroke} />
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
      <button className={css.profile_form__button} type='submit' disabled={!isValid}>
        Редактировать
      </button>
    </form>
  );
}
