import API from '../api/api_methods';

export default class ObjectRenderer {
  static renderElements = async (categoryName) => {
    const array = await API.getObjects(categoryName);

    array.forEach((item) => {
      const cardsGrid = document.getElementById('cards-grid');
      const newCard = ObjectRenderer.cardBuilder(item);
      cardsGrid.appendChild(newCard);
    });
  };

  static cardBuilder = (element) => {
    const card = document.createElement('div');
    card.classList.add('element-card');
    card.setAttribute('data-id', `${element.id}`);
    card.innerHTML = `<img src="${element.image}" class="element-card__img">
    <div class="element-card__info">
      <h2 class="element-card__info__title">${element.name}</h2>
      <img src="/src/assets/sword.png" alt="sword icon" class="element-card__info__sword-icon">
    </div>
    <p class="element-card__swords-counter">
      5 swords
    </p>
    <button class="element-card__comments-btn btn">Comments</button>`;

    return card;
  };
}
