import { createSlice } from "@reduxjs/toolkit";

export interface RemindersStore {
  id: string;
  pet: {
    label: string;
    value: string;
  };
  type: string;
  description?: string;
  repeat: {
    value: string;
    label: string;
  } | null;
  startDate: Date;
  endDate: Date | undefined;
}

const initialState: RemindersStore[] | null = [];

const remindersSlice = createSlice({
  name: "reminders",
  initialState,
  reducers: {
    addReminder: (state, { payload }) => {
      state.push(payload);
    },
    removeReminder: (state, { payload }) =>
      state.filter((item) => item.id !== payload),
  },
});

export const remindersActions = remindersSlice.actions;
export default remindersSlice;
