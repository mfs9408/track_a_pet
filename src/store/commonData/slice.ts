import { createSlice } from "@reduxjs/toolkit";

interface ICommonData {
  isLoading: boolean;
}

const initialState: ICommonData = {
  isLoading: false,
};

const commonDataSlice = createSlice({
  name: "commonData",
  initialState,
  reducers: {
    changeIsLoading: (state: ICommonData) => {
      state.isLoading = true;
    },
  },
});

export const commonDataActions = commonDataSlice.actions;
export default commonDataSlice;
