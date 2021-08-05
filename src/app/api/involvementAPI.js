/* eslint-disable linebreak-style */
class InvolvementAPI {
  constructor() {
    this.baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/2PEXFTMRgyI5oNM8dfBn';
  }

  getLikes = async () => {
    const response = await fetch(`${this.baseURL}/likes/`, {
    });
    await this.getAPIResponse(response);
    const result = await response.json();
    return result;
  };

  postLike = async (itemId) => {
    const response = await fetch(`${this.baseURL}/likes/`, {
      method: 'POST',
      body: JSON.stringify({
        item_id: itemId,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    });
    await this.getAPIResponse(response);
    const result = await response.text();
    return result;
  };

  getComments = async (id) => {
    const response = await fetch(`${this.baseURL}/comments?item_id=${id}`, {
    });
    const responseStatus = await response.ok;
    if (responseStatus) {
      const result = await response.json();
      return result;
    }
    return -1;
  };

  postComments = async (obj) => {
    const response = await fetch(`${this.baseURL}/comments/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    });
    const responseStatus = await response.ok;
    if (responseStatus) {
      const data = await response.text();
      return data;
    }
    return [];
  }

  getAPIResponse = async (response) => {
    if (response.ok) {
      return response;
    }
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  };
}

const involvementAPI = new InvolvementAPI();

export default involvementAPI;
