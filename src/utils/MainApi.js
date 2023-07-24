class MainApi {
  constructor(url, options) {
    this._options = options;
    this._baseUrl = url;
  }

  // eslint-disable-next-line class-methods-use-this
  async _getResponse(res) {
    if (res && res.ok) {
      return res.json();
    }
    return Promise.reject(await res.json());
  }

  async getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      ...this._options,
      method: 'GET',
    })
      .then((res) => this._getResponse(res));
  }

  async updateUserInfo(userInfo) {
    return fetch(`${this._baseUrl}/users/me`, {
      ...this._options,
      method: 'PATCH',
      body: JSON.stringify(userInfo),
    })
      .then((res) => this._getResponse(res));
  }

  async signup(data) {
    return fetch(`${this._baseUrl}/signup`, {
      ...this._options,
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((res) => this._getResponse(res))
      .then(() => this.signin(data));
  }

  async signin(data) {
    const { email, password } = data;
    return fetch(`${this._baseUrl}/signin`, {
      ...this._options,
      method: 'POST',
      body: JSON.stringify({ email, password }),
    })
      .then((res) => this._getResponse(res))
      .then(() => this.getUserInfo());
  }

  async logout() {
    return fetch(`${this._baseUrl}/logout`, {
      ...this._options,
      method: 'POST',
    })
      .then((res) => this._getResponse(res));
  }

  async createMovie(movie) {
    return fetch(`${this._baseUrl}/movies`, {
      ...this._options,
      method: 'POST',
      body: JSON.stringify(movie),
    })
      .then((res) => this._getResponse(res));
  }

  async deleteMovie(movieId) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      ...this._options,
      method: 'DELETE',
    })
      .then((res) => this._getResponse(res));
  }

  async getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, this._options)
      .then((res) => this._getResponse(res));
  }
}

const mainApi = new MainApi('https://api.toxicity.nomoredomains.rocks', {
  headers: {
    'Content-Type': 'application/json',
  },
  credentials: 'include',
});

export default mainApi;
