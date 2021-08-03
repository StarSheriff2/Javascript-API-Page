/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
import API from '../api/api_methods';

export default class ModalRenderer {
  static getCardBtn(item) {
    item.addEventListener('click', (e) => {
      console.log(e.target.parentElement.getAttribute('data-id'));
    });
  }

  static renderElements = async () => {
    const array = await API.getMonsters();
    array.forEach((item) => {
      const modalContainer = document.createElement('div');
      modalContainer.classList.add('modal-container');

      const imgContainer = document.createElement('div');
      imgContainer.classList.add('img-container');
      const modalImg = document.createElement('img');
      modalImg.setAttribute('alt', 'zelda-logo');
      modalImg.src = item.image;
      imgContainer.appendChild(modalImg);
      modalContainer.appendChild(imgContainer);

      const infoContainer = document.createElement('section');
      infoContainer.classList.add('info-container');
      const modalTitle = document.createElement('h1');
      modalTitle.classList.add('modal-title');
      modalTitle.textContent = item.name;
      infoContainer.appendChild(modalTitle);
      const infoUpper = document.createElement('div');
      infoUpper.classList.add('info-upper');
      infoContainer.appendChild(infoUpper);
      const statsContainer = document.createElement('div');
      statsContainer.classList.add('stats-container');
      const infoOne = document.createElement('span');
      infoOne.textContent = `name: ${item.name}`;
      statsContainer.appendChild(infoOne);
      const infoTwo = document.createElement('span');
      infoTwo.textContent = `name: ${item.name}`;
      statsContainer.appendChild(infoTwo);
      infoUpper.appendChild(statsContainer);
      const statsContainerTwo = document.createElement('div');
      statsContainerTwo.classList.add('stats-container');
      const infoThree = document.createElement('span');
      infoThree.textContent = `name: ${item.name}`;
      statsContainerTwo.appendChild(infoThree);
      const infoFour = document.createElement('span');
      infoFour.textContent = `name: ${item.name}`;
      statsContainerTwo.appendChild(infoFour);
      infoUpper.appendChild(statsContainerTwo);
      modalContainer.appendChild(infoContainer);

      const commentsContainer = document.createElement('section');
      commentsContainer.classList.add('comments-container');
      const commentsTitle = document.createElement('h2');
      commentsTitle.classList.add('comments-title');
      commentsTitle.textContent = 'Comments';
      const commentsCounter = document.createElement('span');
      commentsCounter.classList.add('comments-counter');
      commentsCounter.textContent = 10;
      commentsTitle.appendChild(commentsCounter);
      commentsContainer.appendChild(commentsTitle);
      const commentsInfo = document.createElement('div');
      commentsInfo.classList.add('comments-info');
      const commentsDate = document.createElement('span');
      commentsDate.classList.add('comments-date');
      commentsDate.textContent = '24/12/1900';
      commentsInfo.appendChild(commentsDate);
      const commentsText = document.createElement('span');
      commentsText.textContent = 'UserName: text';
      commentsInfo.appendChild(commentsText);
      commentsContainer.appendChild(commentsInfo);
      modalContainer.appendChild(commentsContainer);

      const formContainer = document.createElement('section');
      formContainer.classList.add('form-container');
      const addTitle = document.createElement('h2');
      addTitle.classList.add('add-title');
      addTitle.textContent = 'Add a comment';
      formContainer.appendChild(addTitle);
      const form = document.createElement('form');
      form.classList.add('comments-form');
      form.setAttribute('action', 'submit');
      formContainer.appendChild(form);
      const textInput = document.createElement('input');
      textInput.setAttribute('type', 'text');
      textInput.setAttribute('placeholder', 'Your Name');
      form.appendChild(textInput);
      const textArea = document.createElement('textarea');
      textArea.setAttribute('name', 'comments');
      textArea.setAttribute('id', 'comments-text');
      textArea.setAttribute('cols', '30');
      textArea.setAttribute('rows', '10');
      textArea.setAttribute('placeholder', 'Your Insights');
      form.appendChild(textArea);
      const btnContainer = document.createElement('div');
      btnContainer.classList.add('btn-container');
      const submitBtn = document.createElement('button');
      submitBtn.classList.add('comment-btn');
      submitBtn.setAttribute('type', 'submit');
      btnContainer.appendChild(submitBtn);
      submitBtn.textContent = 'Add comment';
      formContainer.appendChild(btnContainer);
      modalContainer.appendChild(formContainer);
    });
  }
}