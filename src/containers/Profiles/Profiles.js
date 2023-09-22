import { useState, useLayoutEffect } from "react";
import { Header } from "../../components/Header/Header";
import { Cards } from "../../components/Cards/Cards";
import "./Profiles.css";

export const Profiles = () => {
  // Состояние для анимации появления/исчезновения контента
  const [fadeIn, setFadeIn] = useState(false);

  // useEffect, который выполняет анимацию при монтировании компонента
  useLayoutEffect(() => {
    // Устанавливаем значение fadeIn в true, чтобы активировать анимацию
    setFadeIn(true);
  }, []);

  return (
    <div className="profiles">
      {/* Компонент Header для отображения заголовка страницы */}
      <Header />

      {/* Контейнер с контентом страницы */}
      <div
        className={`container ${
          fadeIn ? "profiles-fade-in" : "profiles-fade-out"
        }`}
      >
        {/* Контейнер для заголовка страницы */}
        <div className="title-container">
          {/* Кнопка "Главная" для перехода на главную страницу */}
          <button className="button">&#8592; Главная</button>

          {/* Заголовок страницы */}
          <h1 className="title">Профили пользователей</h1>
        </div>

        {/* Компонент Cards для отображения карточек профилей пользователей */}
        <Cards />
      </div>
    </div>
  );
};
