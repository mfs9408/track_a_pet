import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPetsTypes } from "../../types";

const initialState: IPetsTypes[] | null = [];

const petsSlice = createSlice({
  name: "pets",
  initialState,
  reducers: {
    addPet: (state, { payload }: PayloadAction<IPetsTypes>) => {
      state.push(payload);
    },
    editPet: (state, { payload }: PayloadAction<IPetsTypes>) => {
      const element = state.findIndex((item) => item.id === payload.id);

      state[element] = payload;
    },
  },
});

export const petsActions = petsSlice.actions;
export default petsSlice;
