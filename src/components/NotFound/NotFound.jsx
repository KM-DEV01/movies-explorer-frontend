import React from 'react';
import './NotFound.css';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <section className="notFound">
      <div className="notFound__info">
        <h2 className="notFound__title">404</h2>
        <p className="notFound__text">Страница не найдена</p>
      </div>
      <button className="notFound__button" type="button" onClick={() => navigate(-1)}>Назад</button>
    </section>
  );
}

export default NotFound;
