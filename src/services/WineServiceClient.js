let _singleton = Symbol();
const WINE_URL = 'http://localhost:8080/api/wine';
const WINE_ID_URL = 'http://localhost:8080/api/wine/WID';

const WINE_PERSONALITY_URL = 'http://localhost:8080/api/wine/personality/MB';

class WineServiceClient {
  constructor(singletonToken) {
    if (_singleton !== singletonToken)
      throw new Error('Cannot instantiate directly.');
  }
  static get instance() {
    if (!this[_singleton])
      this[_singleton] = new WineServiceClient(_singleton);
    return this[_singleton];
  }

  findPersonalityWines(personality) {
    return fetch(WINE_PERSONALITY_URL.replace('MB', personality))
      .then(function(response) {
        return response.json();
      });
  }

  findAllWine() {
    return fetch(WINE_URL)
      .then(function(response) {
        return response.json();
      });
  }

  createWine(wine) {
    return fetch(WINE_URL, {
      body: JSON.stringify(wine),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    }).then(function(response) {
      return response.json();
    });
  }

  deleteWine(wineId) {
    return fetch(WINE_ID_URL.replace('WID', wineId), {
      method: 'delete'
    });
  }

  findWineById(wineId) {
    return fetch(
        WINE_ID_URL.replace('WID', wineId))
      .then(function(response) {
        return response.json();
      });
  }

  updateWine(wineId, wine) {
    return fetch(WINE_ID_URL.replace('WID', wineId), {
      method: 'PUT',
      body: JSON.stringify(wine),
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}

export default WineServiceClient;
