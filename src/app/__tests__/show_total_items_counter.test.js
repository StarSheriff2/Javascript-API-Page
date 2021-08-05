/**
 * @jest-environment jsdom
 */

import showItemsCounter from '../DOM/show_total_items_counter';

describe('showItemsCounter()', () => {
  test('returns text with total number of items in page', () => {
    // Arrange
    const { body } = document;

    const navLinkWithItemCounter = document.createElement('button');
    navLinkWithItemCounter.setAttribute('id', 'monsters-btn');
    navLinkWithItemCounter.setAttribute('type', 'button');
    navLinkWithItemCounter.textContent = 'Monsters';
    body.appendChild(navLinkWithItemCounter);

    const cardsGrid = document.createElement('div');
    cardsGrid.setAttribute('id', 'cards-grid');
    body.appendChild(cardsGrid);

    for (let i = 0; i < 20; i += 1) {
      const card = document.createElement('div');
      cardsGrid.appendChild(card);
    }

    // Act
    showItemsCounter();

    // Assert
    expect(navLinkWithItemCounter.textContent).toBe('Monsters(20)');
    expect(navLinkWithItemCounter.textContent).not.toBe('Monsters(10)');
  });
});
