/* eslint-disable linebreak-style */
import involvementAPI from '../api/involvementAPI';

const likeBtnHandler = async (e) => {
  const { id } = e.target.parentElement.parentElement.dataset;
  if (await involvementAPI.postLike(id) === 'Created') {
    const counterText = e.target.parentElement.parentElement.children[2];
    const splitText = counterText.textContent
      .trim()
      .split(' ');
    let itemLikes = parseInt(splitText[0], 10);
    itemLikes += 1;
    counterText.textContent = `${itemLikes} swords`;
    return { id, likes: itemLikes };
  }
  return false;
};

export default likeBtnHandler;
