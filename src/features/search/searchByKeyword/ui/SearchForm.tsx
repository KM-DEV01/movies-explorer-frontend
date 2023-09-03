import { ChangeEvent, SyntheticEvent, useState } from 'react';
import css from './SearchForm.module.css';
import classNames from 'classnames';

interface Props {
  onSubmit: (keyWord: string) => void;
}

export function SearchForm({ onSubmit }: Props) {
  const [keyWord, setKeyWord] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    setIsSubmitted(true);
    if (isValid) onSubmit(keyWord);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsSubmitted(false);
    setKeyWord(event.target.value);
    if (event.target.value) {
      setIsValid(true);
      return;
    }
    setIsValid(false);
  };

  return (
    <section className={css.search}>
      <form className={css.search__form} onSubmit={handleSubmit}>
        <div className={css.search__container}>
          <span className={css.search__icon} />
          <input
            className={css.search__input}
            type='text'
            placeholder='Фильм'
            onChange={handleChange}
            value={keyWord}
          />
          <button className={css.search__button} type='submit'>
            Найти
          </button>
        </div>
        <hr
          className={classNames(css.search__stroke, {
            [css.search__strokeError]: !isValid && isSubmitted,
          })}
        />
        <span
          className={classNames(css.search__error, {
            [css.search__errorHidden]: !(!isValid && isSubmitted),
          })}
        >
          {!isValid && isSubmitted && 'Нужно ввести ключевое слово'}
        </span>
      </form>
    </section>
  );
}
