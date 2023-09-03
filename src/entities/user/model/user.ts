import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IUser {
  name: string;
  email: string;
  _id: string;
}

export interface IUpdateUser {
  name: string;
  email: string;
}

export const initialUserState: IUser = {
  name: '',
  email: '',
  _id: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state._id = action.payload._id;
    },
    updateUser: (state, action: PayloadAction<IUpdateUser>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
  },
});

export const { setUser, updateUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
