import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Card.css";

export const Card = ({ item, setCardList, setCurrentCard }) => {
  // Состояния для управления видимостью кнопок
  const [isBurgerButtonVisible, setIsBurgerButtonVisible] = useState(true);
  const [isArrowButtonVisible, setIsArrowButtonVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [selectedCardName, setSelectedCardName] = useState("");

  // Hook для навигации между страницами
  const navigate = useNavigate();

  // Функция для переключения видимости кнопок
  const toggleButtons = (evt) => {
    evt.stopPropagation(); // Предотвращаем всплытие события на родительские элементы
    setIsBurgerButtonVisible(!isBurgerButtonVisible);
    setIsArrowButtonVisible(!isArrowButtonVisible);
    setIsActive(!isActive);
  };

  // CSS-классы для кнопок
  const burgerButtonClass = `card-burger-button ${
    isBurgerButtonVisible ? "visible" : "hidden"
  }`;

  const arrowButtonClass = `card-arrow-button ${
    isArrowButtonVisible ? "visible" : "hidden"
  }`;

  // Функция для обработки клика по карточке, переходит на страницу "/profile"
  const clickLink = (evt, cardName) => {
    setSelectedCardName(cardName);
    localStorage.setItem("selectedCardName", cardName);
    navigate(`/profile`);
  };

  // Обработчики событий для перетаскивания элементов
  const dragStartHandler = (evt, item) => {
    setCurrentCard(item); // Устанавливаем текущую перетаскиваемую карточку
    evt.dataTransfer.setData("text/plain", JSON.stringify(item)); // Устанавливаем данные, которые будут переданы при перетаскивании
  };

  const dragEndHandler = (evt) => {
    evt.target.style.background = "white"; // Завершение перетаскивания, восстанавливаем фон элемента
  };

  const dragOverHandler = (evt) => {
    evt.preventDefault(); // Предотвращаем стандартное действие браузера для перетаскивания
    evt.target.style.background = "lightgray"; // Устанавливаем стиль при наведении элемента на цель перетаскивания
  };

  const dropHandler = (evt, item) => {
    evt.preventDefault(); // Предотвращаем стандартное действие браузера для перетаскивания
    const draggedItem = JSON.parse(evt.dataTransfer.getData("text/plain")); // Получаем данные из перетаскиваемого элемента
    setCardList((prevCardList) => {
      // Обновляем порядок элементов в списке
      return prevCardList.map((c) => {
        if (c.id === item.id) {
          return { ...c, order: draggedItem.order };
        }
        if (c.id === draggedItem.id) {
          return { ...c, order: item.order };
        }
        return c;
      });
    });
    evt.target.style.background = "white"; // Восстанавливаем фон элемента
  };

  return (
    <div
      className="card"
      onClick={(evt) => clickLink(evt, item.title)}
      draggable={true}
      onDragStart={(evt) => dragStartHandler(evt, item)}
      onDragLeave={(evt) => dragEndHandler(evt)}
      onDragEnd={(evt) => dragEndHandler(evt)}
      onDragOver={(evt) => dragOverHandler(evt)}
      onDrop={(evt) => dropHandler(evt, item)}
    >
      <div
        className={
          isActive ? "card-container-info-active" : "card-container-info"
        }
      >
        <button className={isActive ? "card-button-active" : "card-button"}>
          Профиль пользователей
        </button>
        <h3 className="card-title">{item.title}</h3>
        <div className="button-container">
          <button className="button-bottom"></button>
          <button className="button-bottom button-bottom-tsaetok"></button>
          <button className="button-bottom button-bottom-tsaetok"></button>
          <button className="button-bottom button-bottom-tsaetok"></button>
        </div>
      </div>
      <div className={isActive ? "card-container-active" : "card-container"}>
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
  );
};
