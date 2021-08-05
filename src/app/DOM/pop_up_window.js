/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
import API from '../api/api_methods';
import involvementAPI from '../api/involvementAPI';
import Comments from '../objects/comments';
import close from '../../assets/close.svg';

const body = document.querySelector('body');
export default class ModalRenderer {
  static displayModal(item) {
    item.addEventListener('click', async (e) => {
      const myId = e.target.parentElement.getAttribute('data-id');
      const myComments = await involvementAPI.getComments(myId);
      const myMonster = await API.getElement(myId);
      ModalRenderer.renderElements(myMonster, myId, myComments);
    });
  }

  static renderElements = (item, id, comments) => {
    const modalContainer = document.createElement('div');
    modalContainer.classList.add('modal-container');
    modalContainer.setAttribute('data-id', `${id}`);
    modalContainer.innerHTML = `
    <button class="close-btn" type="button" style="background-image: url(${close});"></button>
    <div class="img-container">
      <img class="modal-image" alt="zelda-logo" src="${item.image}">
    </div>
    <section class="info-container">
      <h1 class="modal-title">${item.name}</h1>
      <div class="info-upper">
        <div class="stats-container">
          <span>${item.description}</span>
        </div>
        <div class="stats-container">
          <span>Drops: ${item.drops}</span>
          <span>Locations: ${item.common_locations}</span>
        </div>
      </div>
    </section>
    <section class="comments-container">
      <h2 class="comments-title">Comments<span class="comments-counter">
      ${(comments === -1) ? 0 : comments.length}</span></h2>
      <div class="comments-info">
        <span class="comments-date">2021-08-04</span>
        <span>Jane: Hello</span></div>
      <div class="comments-info">
    </section>
    <section class="form-container">
      <h2 class="add-title">Add a comment</h2>
      <form class="comments-form" action="submit">
        <input id="user" type="text" placeholder="Your Name">
        <textarea name="comments" id="comments-text" cols="30" rows="10" placeholder="Your Insights"></textarea>
      </form>
      <div class="btn-container">
        <button class="comment-btn" type="button">Add comment</button>
      </div>
    </section>`;
    body.appendChild(modalContainer);
    const commentsContainer = document.querySelector('.comments-container');
    const closeBtn = document.querySelector('.close-btn');
    const submitBtn = document.querySelector('.comment-btn');
    ModalRenderer.commentsLoop(comments, commentsContainer);
    Comments.addEvent(submitBtn);
    ModalRenderer.closeModal(closeBtn);
  };

  static commentsLoop(arr, parent) {
    if (arr !== -1) {
      arr.forEach((item) => {
        const commentsInfo = document.createElement('div');
        commentsInfo.classList.add('comments-info');
        commentsInfo.innerHTML = `
          <span class="comments-date">${item.creation_date}</span>
          <span>${item.username}: ${item.comment}</span></div>`;
        parent.appendChild(commentsInfo);
      });
    }
  }

  static closeModal(item) {
    item.addEventListener('click', () => {
      body.removeChild(item.parentElement);
    });
  }
}
