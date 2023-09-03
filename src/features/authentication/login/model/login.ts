import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ILogin {
  email: string;
  password: string;
}

interface ILoginState {
  isLoggedIn: boolean;
}

const initialLoginState: ILoginState = {
  isLoggedIn: false,
};
export const loginSlice = createSlice({
  name: 'login',
  initialState: initialLoginState,
  reducers: {
    setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setIsLoggedIn } = loginSlice.actions;
export const loginReducer = loginSlice.reducer;
