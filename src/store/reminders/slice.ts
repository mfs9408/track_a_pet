import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RemindersStore {
  id: number;
  type: string;
  pet: string;
  petId: number;
  description: string;
}

const initialState: RemindersStore[] | null = [];

const remindersSlice = createSlice({
  name: "reminders",
  initialState,
  reducers: {
    getUser: (state, { payload }: PayloadAction<any>) => {},
  },
});

export const remindersActions = remindersSlice.actions;
export default remindersSlice;
