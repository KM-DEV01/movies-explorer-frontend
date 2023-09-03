import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IInfoPanel {
  information: string;
  isError: boolean;
}

export const initialInfoPanelState: IInfoPanel = {
  information: '',
  isError: false,
};

export const infoPanelSlice = createSlice({
  name: 'infoPanel',
  initialState: initialInfoPanelState,
  reducers: {
    setInfo: (state, { payload }: PayloadAction<IInfoPanel>) => {
      state.information = payload.information;
      state.isError = payload.isError;
    },
  },
});

export const { setInfo } = infoPanelSlice.actions;
export const infoPanelReducer = infoPanelSlice.reducer;
