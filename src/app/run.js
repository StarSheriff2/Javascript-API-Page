/* eslint-disable linebreak-style */
import { ObjectRenderer, showItemsCounter } from './DOM/dom_functions';
import likes from './objects/likes';
import logo from '../assets/logo.png';

export default async function run() {
  const logoDiv = document.querySelector('.img-container');
  logoDiv.innerHTML = `<img src="${logo}" alt="zelda-logo">`;
  await likes.mapLikes();
  await ObjectRenderer.renderElements('monsters');
  showItemsCounter();
  ObjectRenderer.renderElements('monsters');
}
