/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
import likeBtnHandler from './like_event_handler';
import likes from '../objects/likes';
import ModalRenderer from './pop_up_window';

export default class CardEvents {
  constructor(card) {
    this.likeBtn = card.querySelector('.element-card__info__sword-icon');
    this.commentBtn = card.lastChild;
  }

  updateAllCards = async (itemLikesObj) => {
    const cardNodes = document.querySelectorAll('.element-card');
    await likes.mapLikes();

    cardNodes.forEach((card) => {
      const itemId = card.dataset.id;
      const likesCounter = card.childNodes[4];
      const itemLikes = likes.getItemLikes(itemId);
      if (itemId === itemLikesObj.id && itemLikes === itemLikesObj.likes) {
        return;
      }
      likesCounter.textContent = `${itemLikes} swords`;
    });
  }

  addListeners = () => {
    this.addLikeListener();
    this.addCommentListener();
  }

  addCommentListener = () => {
    this.commentBtn.addEventListener('click', async (e) => {
      await ModalRenderer.commentBtnHandler(e);
    });
  }

  addLikeListener = () => {
    this.likeBtn.addEventListener('click', async (e) => {
      const itemLikesObj = await likeBtnHandler(e);
      if (itemLikesObj) this.updateAllCards(itemLikesObj);
    });
  }
}
