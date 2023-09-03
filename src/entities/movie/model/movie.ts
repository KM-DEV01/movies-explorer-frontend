import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IImageResp {
  url: string;
}

export interface IMovieData {
  country: string;
  director: string;
  duration: number;
  year: string;
  description: string;
  trailerLink: string;
  thumbnail: IImageResp | string;
  movieId: number;
  nameRU: string;
  nameEN: string;
  image: IImageResp | string;
}

export interface ISavedMovie extends IMovieData {
  _id: string;
}

export interface IMovie extends IMovieData {
  id: number;
  savedMovieId: string;
}

export interface ISavedMovies {
  movies: Array<ISavedMovie>;
}

// const initSavedMovie: ISavedMovie = {
//   country: '',
//   director: '',
//   duration: 0,
//   year: '',
//   description: '',
//   trailerLink: '',
//   thumbnail: '',
//   movieId: 0,
//   nameRU: '',
//   nameEN: '',
//   image: '',
//   _id: '',
// };
//
// const initMovie: IMovie = {
//   country: '',
//   director: '',
//   duration: 0,
//   year: '',
//   description: '',
//   image: '',
//   trailerLink: '',
//   thumbnail: '',
//   movieId: 0,
//   nameRU: '',
//   nameEN: '',
//   id: 0,
//   savedMovieId: '',
// };

export const movieSlice = createSlice({
  name: 'movie',
  initialState: [] as IMovie[],
  reducers: {
    setMovies: (_state, action: PayloadAction<IMovie[]>) => {
      return action.payload;
    },
    updateMovies: (state, { payload }: PayloadAction<IMovie>) => {
      return state.map((movie) => {
        if (movie.id === payload.id) {
          return payload;
        }
        return movie;
      });
    },
  },
});

export const savedMovieSlice = createSlice({
  name: 'savedMovie',
  initialState: [] as ISavedMovie[],
  reducers: {
    setSavedMovies: (_state, action: PayloadAction<ISavedMovie[]>) => {
      return action.payload;
    },
  },
});

export const { setMovies, updateMovies } = movieSlice.actions;
export const movieReducer = movieSlice.reducer;

export const { setSavedMovies } = savedMovieSlice.actions;
export const savedMovieReducer = savedMovieSlice.reducer;
