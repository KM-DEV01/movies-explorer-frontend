class MoviesApi {
  constructor(url) {
    this._url = url;
  }

  async getMovies() {
    return fetch(this._url, {
      method: 'GET',
    })
      .then((res) => {
        if (res && res.ok) {
          return res.json();
        }
        return Promise.reject(new Error(`Ошибка ${res.status}`));
      });
  }
}

const moviesApi = new MoviesApi('https://api.nomoreparties.co/beatfilm-movies');

export default moviesApi;
