const getTotalItems = () => {
  const allCards = document.querySelector('#cards-grid').children;
  return allCards.length;
};

const showItemsCounter = () => {
  const monstersBtn = document.getElementById('monsters-btn');
  monstersBtn.textContent = `Monsters(${getTotalItems()})`;
}

export default showItemsCounter;
