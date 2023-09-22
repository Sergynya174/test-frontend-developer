import { useState, useLayoutEffect } from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import "./Settings.css";

export const Settings = () => {
  // Состояния для управления анимацией и раскрытием описания
  const [fadeIn, setFadeIn] = useState(false); // Для анимации появления
  const [expandDescription, setExpandDescription] = useState(false); // Для раскрытия описания

  // Эффект useLayoutEffect запускается после монтирования компонента.
  useLayoutEffect(() => {
    // Устанавливаем состояния для запуска анимации и раскрытия описания.
    setFadeIn(true); // Запуск анимации появления
    setExpandDescription(true); // Раскрытие описания

    // Зависимости этого эффекта пусты, поэтому он запустится только один раз после монтирования компонента.
  }, []);

  return (
    <div
      className={`settings ${
        fadeIn ? "settings-fade-in" : "settings-fade-out"
      }`}
    >
      {/* Компонент Header, который, предположительно, отображает заголовок страницы */}
      <Header />

      {/* Элемент, который может быть раскрыт для отображения описания */}
      <div
        className={`settings-description ${expandDescription && "expanded"}`}
      >
        {/* Содержимое описания будет вставлено сюда */}
      </div>

      {/* Компонент Footer, который, предположительно, отображает подвал страницы */}
      <Footer />
    </div>
  );
};
