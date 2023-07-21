import React from 'react';
import './Message.css';

function Message({ isError, isMovies }) {
  let message = '';
  if (!isMovies) {
    message = 'Ничего не найдено';
  }
  if (isError && !isMovies) {
    message = 'Во время запроса произошла ошибка. '
      + 'Возможно, проблема с соединением или сервер недоступен. '
      + 'Подождите немного и попробуйте ещё раз.';
  }
  return (
    message && (
    <section className="message">
      <h2 className="message__text">{message}</h2>
    </section>
    )
  );
}

export default Message;
