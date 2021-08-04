/* eslint-disable linebreak-style */
import { ObjectRenderer, showItemsCounter } from './DOM/dom_functions';
import likes from './objects/likes';

export default async function run() {
  await likes.mapLikes();
  await ObjectRenderer.renderElements('monsters');
  showItemsCounter();
}
