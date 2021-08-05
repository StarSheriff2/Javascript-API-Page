/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
import API from '../api/api_methods';
import involvementAPI from '../api/involvementAPI';
import Comments from '../objects/comments';
import close from '../../assets/close.svg';
import getCounter from './comments_counter';

const body = document.querySelector('body');
export default class ModalRenderer {
  static commentBtnHandler = async (e) => {
    const myId = e.target.parentElement.getAttribute('data-id');
    const myComments = await involvementAPI.getComments(myId);
    const itemsNumber = getCounter(myComments);
    const myMonster = await API.getElement(myId);
    ModalRenderer.renderElements(myMonster, myId, myComments, itemsNumber);
  };

  static renderElements = (item, id, comments, itemsNumber) => {
    const modalContainer = document.createElement('div');
    modalContainer.classList.add('modal-container');
    modalContainer.setAttribute('data-id', `${id}`);
    modalContainer.innerHTML = `
    <button class="close-btn" type="button" style="background-image: url(${close});"></button>
    <div class="modal-img-container">
      <img class="modal-image" alt="monster-img" src="${item.image}">
    </div>
    <section class="info-container">
      <h1 class="modal-title">${item.name}</h1>
      <div class="info-upper">
        <div class="stats-container">
          <span>${item.description}</span>
        </div>
        <div class="stats-container">
          <span>Drops: <br> ${item.drops}</span>
          <span>Locations: <br> ${item.common_locations}</span>
        </div>
      </div>
    </section>
    <section class="comments-container">
      <h2 class="comments-title">Comments<span class="comments-counter">
      ${(itemsNumber === -1) ? 0 : itemsNumber}</span></h2>
      <div class="comments-overflow">
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
    const commentsContainer = document.querySelector('.comments-overflow');
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
          <span class="comments-text">${item.username}: ${item.comment}</span></div>`;
        parent.appendChild(commentsInfo);
      });
    }
  }

  static closeModal(item) {
    item.addEventListener('click', () => {
      body.removeChild(item.parentElement);
    });
  }

  static async removeModal() {
    const body = document.querySelector('body');
    body.addEventListener('click', (e) => {
      const modal = document.querySelector('.modal-container');
      if (!modal.contains(e.target)) {
        body.removeChild(modal);
      }
    });
  }
}

ModalRenderer.removeModal();
