/* eslint-disable linebreak-style */
import involvementAPI from '../api/involvementAPI';

class Likes {
  constructor() {
    this.likesMapped = {};
  }

  mapLikes = async () => {
    const array = await involvementAPI.getLikes();

    array.forEach((item) => {
      this.likesMapped[item.item_id] = {};
      this.likesMapped[item.item_id].likes = item.likes;
    });
  }

  getItemLikes = (id) => {
    if (id in this.likesMapped) {
      return this.likesMapped[id].likes;
    }
    return 0;
  }
}

const likes = new Likes();

export default likes;
