/* eslint-disable linebreak-style */
import involvementAPI from '../api/involvementAPI';

class Comments {
  constructor(id, username, comment) {
    this.item_id = id;
    this.username = username;
    this.comment = comment;
  }

  static addComment(objId, user, text) {
    const comment = new Comments(objId, user, text);
    return comment;
  }

  static addEvent(element) {
    element.addEventListener('click', async () => {
      const userInput = document.getElementById('user');
      const commentInput = document.getElementById('comments-text');
      const modalContainer = document.querySelector('.modal-container');
      const commentsContainer = document.querySelector('.comments-container');
      const myId = modalContainer.dataset.id;
      const myObj = Comments.addComment(myId, userInput.value, commentInput.value);
      await involvementAPI.postComments(myObj);
      await Comments.updateComments(myId, commentsContainer);
    });
  }

  static async getMyComments(id) {
    const myComments = await involvementAPI.getComments(id);
    return myComments;
  }

  static async updateComments(id, parent) {
    const myArr = await involvementAPI.getComments(id);
    const commentsCounter = document.querySelector('.comments-counter');
    commentsCounter.textContent = myArr.length;
    const myItem = myArr[myArr.length - 1];
    const commentsInfo = document.createElement('div');
    commentsInfo.classList.add('comments-info');
    commentsInfo.innerHTML = `
    <span class="comments-date">${myItem.creation_date}</span>
    <span>${myItem.username}: ${myItem.comment}</span></div>`;
    parent.appendChild(commentsInfo);
  }
}

export default Comments;
