/* eslint-disable linebreak-style */
import ObjectRenderer from './DOM/dom_functions';
import likes from './objects/likes';

export default async function run() {
  await likes.mapLikes();
  ObjectRenderer.renderElements('monsters');
}
