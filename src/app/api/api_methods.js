class HyruleCompendiumAPI {
  constructor() {
    this.baseURL = 'https://botw-compendium.herokuapp.com/api/v2';
  }

  getObjects = async (categoryName) => {
    const response = await fetch(`${this.baseURL}/category/${categoryName}`, {
    });
    return this.getAPIResponse(response);
  }

  getAPIResponse = async (response) => {
    if (response.ok) {
      const { data } = await response.json();
      return data;
    }
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
}

const API = new HyruleCompendiumAPI();

export default API;
