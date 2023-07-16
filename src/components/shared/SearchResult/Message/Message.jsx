import React from 'react';
import './Message.css';

function Message({ isSearched, foundMovies, isFailed }) {
  let message = '';
  if (!foundMovies.length) {
    message = isSearched ? 'Ничего не найдено' : 'Введите название фильма';
  }
  if (isFailed) {
    message = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.';
  }
  return (
    <section className="message">
      <h2 className="message__text">{message}</h2>
    </section>
  );
}

export default Message;
