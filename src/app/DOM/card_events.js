/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
import likeBtnHandler from './like_event_handler';
import likes from '../objects/likes';

export default class CardEvents {
  constructor(card) {
    this.likeBtn = card.querySelector('.element-card__info__sword-icon');
  }

  updateAllCards = () => {
    const cardNodes = document.querySelectorAll('.element-card');

    cardNodes.forEach(async (card) => {
      const itemId = card.dataset.id;
      const likesCounter = card.childNodes[4];
      await likes.mapLikes();
      likesCounter.textContent = `${likes.getItemLikes(itemId)} swords`;
    });
  }

  addLikeListener = () => {
    this.likeBtn.addEventListener('mousedown', async (e) => {
      await likeBtnHandler(e);
      this.updateAllCards();
    });
  }
}
