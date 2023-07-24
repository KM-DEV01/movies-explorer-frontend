import React from 'react';
import './Message.css';

function Message({
  isMovies,
  isError,
  isValid,
  isSubmitted,
}) {
  const [message, setMessage] = React.useState('');
  React.useEffect(() => {
    if (isSubmitted && isValid) {
      setMessage('Ничего не найдено');
    }
    if (isError) {
      setMessage('Во время запроса произошла ошибка. '
          + 'Возможно, проблема с соединением или сервер недоступен. '
          + 'Подождите немного и попробуйте ещё раз.');
    }
  }, [isMovies]);
  return (
    <section className={`message ${isMovies && 'message_hidden'}`}>
      <h2 className="message__text">{message}</h2>
    </section>
  );
}

export default Message;
