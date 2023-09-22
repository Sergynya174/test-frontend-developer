import { useState } from "react";
import { Card } from "../Card/Card";
import { data } from "../../utils";
import "./Cards.css";

export const Cards = () => {
  // Используем useState для создания состояния cardList и currentCard
  const [cardList, setCardList] = useState(data); // cardList хранит список карточек
  const [currentCard, setCurrentCard] = useState(null); // currentCard хранит текущую выбранную карточку

  // Функция sortCards используется для сортировки карточек
  const sortCards = (a, b) => {
    // Если значение 'order' в объекте 'a' больше, чем в объекте 'b', возвращаем 1
    if (a.order > b.order) {
      return 1;
    } else {
      // В противном случае, возвращаем -1
      return -1;
    }
  };

  return (
    <div className="cards">
      {/* Используем метод sort() для сортировки карточек с помощью функции sortCards */}
      {cardList.sort(sortCards).map((item) => {
        return (
          // Для каждой карточки создаем компонент Card и передаем ей информацию о карточке
          // а также функции setCardList и setCurrentCard для управления состоянием
          <Card
            item={item} // Информация о текущей карточке
            key={item.title} // Уникальный ключ для React
            setCardList={setCardList} // Функция для обновления списка карточек
            setCurrentCard={setCurrentCard} // Функция для установки текущей карточки
          />
        );
      })}
    </div>
  );
};
