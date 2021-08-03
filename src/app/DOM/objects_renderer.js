import API from '../api/api_methods';

export default class ObjectRenderer {
  static renderElements = async () => {
    const array = await API.getMonsters();

    array.forEach(item => {
      const cardsGrid = document.getElementById('cards-grid');
      const img = document.createElement('img');
      img.setAttribute('src', `${item.image}`)
      img.style.height = '100';
      img.style.width = '100';
      cardsGrid.appendChild(img);
      const monsterName = document.createElement('h2');
      monsterName.textContent = `${item.name}`;
      cardsGrid.appendChild(monsterName);
    });
  }
}
