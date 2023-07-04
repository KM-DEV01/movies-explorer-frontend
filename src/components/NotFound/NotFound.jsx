import React from 'react';
import './NotFound.css';

function NotFound() {
  return (
    <div className="notFound">
      <div className="notFound__info">
        <h2 className="notFound__title">404</h2>
        <p className="notFound__text">Страница не найдена</p>
      </div>
      <button className="notFound__button" type="button">Назад</button>
    </div>
  );
}

export default NotFound;
