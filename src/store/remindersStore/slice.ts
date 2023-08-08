import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InterfaceReminderStore {
  id: string;
  pet: {
    id: string;
    value: string;
  } | null;
  type: string;
  description?: string;
  repeat: {
    id: string;
    value: string;
  } | null;
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

    editReminder: (state, { payload }: PayloadAction<InterfaceReminderStore>) => {
      const index = state.findIndex((item) => item.id === payload.id);

      state[index] = payload;
    },
  },
});

export const remindersActions = remindersSlice.actions;
export default remindersSlice;
