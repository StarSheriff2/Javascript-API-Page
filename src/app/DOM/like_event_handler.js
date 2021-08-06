/* eslint-disable linebreak-style */
import involvementAPI from '../api/involvementAPI';

const likeBtnHandler = async (e) => {
  const { id } = e.target.parentElement.parentElement.dataset;
  await involvementAPI.postLike(id);
  const counterText = e.target.parentElement.parentElement.children[2];
  const splitText = counterText.textContent
    .trim()
    .split(' ');
  let itemLikes = parseInt(splitText[0], 10);
  itemLikes += 1;
  counterText.textContent = `${itemLikes} swords`;
};

export default likeBtnHandler;
