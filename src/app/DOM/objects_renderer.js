/* eslint-disable linebreak-style */
import API from '../api/api_methods';
import likes from '../objects/likes';
import ModalRenderer from './pop_up_window';
import CardEvents from './card_events';
import swordIcon from '../../assets/sword.png';

export default class ObjectRenderer {
  static renderElements = async (categoryName) => {
    const array = await API.getObjects(categoryName);
    array.sort((a, b) => a.id - b.id);

    array.forEach((item) => {
      const cardsGrid = document.getElementById('cards-grid');
      const newCard = ObjectRenderer.cardBuilder(item, likes.getItemLikes(item.id));
      cardsGrid.appendChild(newCard);
      const commentsBtn = newCard.lastChild;
      ModalRenderer.displayModal(commentsBtn);
      const cardEvents = new CardEvents(newCard);
      cardEvents.addLikeListener();
    });
  };

  static cardBuilder = (element, likes) => {
    const card = document.createElement('div');
    card.classList.add('element-card');
    card.setAttribute('data-id', `${element.id}`);
    card.innerHTML = `<img src="${element.image}" class="element-card__img">
    <div class="element-card__info">
      <h2 class="element-card__info__title">${element.name}</h2>
      <img src="${swordIcon}" alt="sword icon" class="element-card__info__sword-icon">
    </div>
    <p class="element-card__swords-counter">
      ${likes} swords
    </p>
    <button class="element-card__comments-btn btn">Comments</button>`;

    return card;
  };
}
