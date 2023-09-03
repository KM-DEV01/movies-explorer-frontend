import { useState, useEffect } from 'react';
import classNames from 'classnames';
import css from './EmptySearchResult.module.css';

interface Props {
  isMovies: number;
  isError: boolean;
  isValid?: boolean;
  isSubmitted: boolean;
}

export function EmptySearchResult({ isMovies, isError, isSubmitted }: Props) {
  const [searchResult, setSearchResult] = useState('');
  useEffect(() => {
    if (isSubmitted && !isError) {
      setSearchResult('Ничего не найдено');
    }
    if (isError) {
      setSearchResult(
        'Во время запроса произошла ошибка. ' +
          'Возможно, проблема с соединением или сервер недоступен. ' +
          'Подождите немного и попробуйте ещё раз.',
      );
    }
  }, [isError, isMovies, isSubmitted]);
  return (
    <section
      className={classNames(css.searchResult, {
        [css.searchResult_hidden]: (isMovies && !isSubmitted) || (isMovies && !isError),
      })}
    >
      <h2 className={css.searchResult__text}>{searchResult}</h2>
    </section>
  );
}
