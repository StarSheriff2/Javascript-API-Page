/* eslint-disable linebreak-style */
class InvolvementAPI {
  constructor() {
    this.baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/2PEXFTMRgyI5oNM8dfBn';
  }

  getLikes = async () => {
    const response = await fetch(`${this.baseURL}/likes/`, {
    });
    return this.getAPIResponse(response);
  };

  getAPIResponse = async (response) => {
    if (response.ok) {
      const likesArray = await response.json();
      return likesArray;
    }
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  };
}

const involvementAPI = new InvolvementAPI();

export default involvementAPI;
