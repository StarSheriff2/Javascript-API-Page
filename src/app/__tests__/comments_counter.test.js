/* eslint-disable linebreak-style */
/**
 * @jest-environment jsdom
 */

import getCounter from '../DOM/comments_counter';

describe('comments counter', () => {
  test('return a number with the lenght of an array of objects', () => {
    // Arrange
    const testArr = [
      {
        test: 'item1',
      },
      {
        test: 'item2',
      },
      {
        test: 'item3',
      },
    ];
    // Act
    const myNumber = getCounter(testArr);
    // Assert
    expect(myNumber).toBe(testArr.length);
  });
});
