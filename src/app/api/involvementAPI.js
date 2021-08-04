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

  getComments = async () => {
    const response = await fetch(`${this.baseURL}/comments?item_id=12`, {
    });
    const result = await response.json();
    return result;
  };

  postComments = async (obj) => {
    const response = await fetch(`${this.baseURL}/comments/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    });
    const data = await response.text();
    return data;
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
