import { createSlice } from "@reduxjs/toolkit";

export interface InterfaceReminderStore {
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
  };
  when: Date;
  endDate: Date | undefined;
}

const initialState: InterfaceReminderStore[] | null = [];

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
