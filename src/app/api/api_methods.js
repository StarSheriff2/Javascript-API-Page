class HyruleCompendiumAPI {
  constructor() {
    this.baseURL = 'https://botw-compendium.herokuapp.com/api/v2';
  }

  getMonsters = async () => {
    const response = await (await fetch(`${this.baseURL}/category/monsters`, {
    })).json();
    const { data } = response;
    return data;
  }
}

const API = new HyruleCompendiumAPI();

export default API;
