/* eslint-disable linebreak-style */
import involvementAPI from '../api/involvementAPI';

const likeBtnHandler = async (e) => {
  const { id } = e.target.parentElement.parentElement.dataset;
  await involvementAPI.postLike(id);
};

export default likeBtnHandler;
