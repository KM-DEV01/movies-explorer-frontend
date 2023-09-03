import { MainAPI } from '@shared/api';
import { IMovie, IMovieData, ISavedMovie, ISavedMovies } from '@entities/movie';

class MovieAPI extends MainAPI {
  async createMovie(movie: IMovieData) {
    return fetch(`${this.baseUrl}/movies`, {
      ...this.options,
      method: 'POST',
      body: JSON.stringify(movie),
    }).then((res) => this.getResponseData<ISavedMovie>(res));
  }

  async getMovies() {
    return fetch('https://api.nomoreparties.co/beatfilm-movies', {
      method: 'GET',
    }).then((res) => this.getResponse<Array<IMovie>>(res));
  }

  async getSavedMovies() {
    return fetch(`${this.baseUrl}/movies`, this.options).then((res) =>
      this.getResponse<ISavedMovies>(res),
    );
  }

  async deleteMovie(movieId: string): Promise<{ message: string }> {
    return fetch(`${this.baseUrl}/movies/${movieId}`, {
      ...this.options,
      method: 'DELETE',
    }).then((res) => this.getResponse(res));
  }
}

export const movieApi = new MovieAPI();
