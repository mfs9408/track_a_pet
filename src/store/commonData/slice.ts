import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICommonData {
  isLoading: boolean;
  time: number;
}

const initialState: ICommonData = {
  isLoading: false,
  time: Date.now(),
};

const commonDataSlice = createSlice({
  name: "commonData",
  initialState,
  reducers: {
    changeIsLoading: (
      state: ICommonData,
      { payload }: PayloadAction<boolean>
    ) => {
      state.isLoading = payload;
    },

    foo: (state: ICommonData) => {
      state.isLoading = true;
    },
    changeDate: (state, { payload }: PayloadAction<number>) => {
      state.time = payload;
    },
  },
});

export const commonDataActions = commonDataSlice.actions;
export default commonDataSlice;
