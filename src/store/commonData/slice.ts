import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ICommonData {
  isLoading: boolean;
}

const initialState: ICommonData = {
  isLoading: false,
};

const commonDataSlice = createSlice({
  name: 'commonData',
  initialState,
  reducers: {
    changeIsLoading: (
      state: ICommonData,
      { payload }: PayloadAction<boolean>
    ) => {
      state.isLoading = payload.isLoading;
    },
  },
});

export const commonDataActions = commonDataSlice.actions;
export default commonDataSlice;
