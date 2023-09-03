import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '@entities/user';
import { loginReducer } from '@features/authentication/login';
import { movieReducer, savedMovieReducer } from '@entities/movie';
import { infoPanelReducer } from '@widgets/InfoPanel';

export const store = configureStore({
  reducer: {
    user: userReducer,
    login: loginReducer,
    movies: movieReducer,
    savedMovies: savedMovieReducer,
    info: infoPanelReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
