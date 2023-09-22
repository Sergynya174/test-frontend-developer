import { useLayoutEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

export const Profile = () => {
  // Инициализация хука для навигации
  const navigate = useNavigate();

  // Состояния компонента
  const [isBurgerButtonVisible, setIsBurgerButtonVisible] = useState(true); // Отображение кнопки бургера
  const [isArrowButtonVisible, setIsArrowButtonVisible] = useState(false); // Отображение кнопки стрелки
  const [fadeIn, setFadeIn] = useState(false); // Анимация появления
  const [isActive, setIsActive] = useState(false); // Активное состояние компонента
  const [selectedCardName, setSelectedCardName] = useState("");

  // Функция для переключения кнопок бургера и стрелки
  const toggleButtons = () => {
    setIsBurgerButtonVisible(!isBurgerButtonVisible);
    setIsArrowButtonVisible(!isArrowButtonVisible);
    setIsActive(!isActive);
  };

  // Функция для перехода к настройкам
  const clickNavigateSettings = () => {
    navigate(`/settings`);
  };

  // Функция для перехода к списку профилей пользователей
  const clickNavigateProfiles = () => {
    navigate(`/`);
  };

  // Определение классов для кнопки бургера
  const burgerButtonClass = `card-burger-button ${
    isBurgerButtonVisible ? "visible" : "hidden"
  }`;

  // Определение классов для кнопки стрелки
  const arrowButtonClass = `card-arrow-button ${
    isArrowButtonVisible ? "visible" : "hidden"
  }`;

  // Использование useLayoutEffect для запуска анимации при монтировании компонента
  useLayoutEffect(() => {
    setFadeIn(true);
    const storedCardName = localStorage.getItem("selectedCardName");
    if (storedCardName) {
      setSelectedCardName(storedCardName);
    }
  }, []);

  // Рендеринг компонента
  return (
    <div className="profile-main">
      {/* Вставляем компонент Header */}
      <Header />
      <div
        className={`profile-container ${
          fadeIn ? "profile-fade-in" : "profile-fade-out"
        }`}
      >
        <div className="profile">
          <div className="title-container">
            {/* Кнопка для возврата к списку профилей пользователей */}
            <button
              className={isActive ? "button-active" : "button"}
              onClick={clickNavigateProfiles}
            >
              &#8592; Профили пользователей
            </button>
            {/* Заголовок профиля */}
            <h1 className="title">{selectedCardName}</h1>
          </div>
          <div className="card">
            <div
              className={
                isActive
                  ? "profile-container-info-active"
                  : "profile-container-info"
              }
            >
              <div className="profile-button-container">
                {/* Кнопки внутри профиля */}
                <button className="button-bottom"></button>
                <button className="button-bottom button-bottom-tsaetok"></button>
                <button className="button-bottom button-bottom-tsaetok"></button>
                <button className="button-bottom button-bottom-tsaetok"></button>
              </div>
            </div>
            <div
              className={isActive ? "card-container-active" : "card-container"}
            >
              {/* Кнопки бургера и стрелки */}
              <button className={arrowButtonClass} onClick={toggleButtons}>
                &#8594;
              </button>
              <button className={burgerButtonClass} onClick={toggleButtons}>
                <span className="burger-line"></span>
                <span className="burger-line"></span>
                <span className="burger-line"></span>
              </button>
            </div>
          </div>
        </div>
        <div
          className="profile-description"
          onClick={clickNavigateSettings}
        ></div>
      </div>
    </div>
  );
};
