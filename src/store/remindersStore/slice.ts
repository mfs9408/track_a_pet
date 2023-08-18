import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ERemindersType, ERepeatType } from "../../enums";
import { changeNextRepeat } from "../../helpers/dateHelpers";

export interface IActivity {
  id: string;
  pet: {
    id: string;
    value: string;
  } | null;
  type: string;
  description?: string;
  repeat: {
    id: ERepeatType;
    value: string;
  };
  when: Date;
  endDate: Date | undefined;
  nextRepeat: Date | null;
}

export interface InterfaceReminderStore {
  activity: IActivity[];
  appointments: IActivity[];
}

const initialState: InterfaceReminderStore = {
  activity: [],
  appointments: [],
};

const remindersSlice = createSlice({
  name: "reminders",
  initialState,
  reducers: {
    addReminder: (state, { payload }: PayloadAction<IActivity>) => {
      state.activity.push(payload);
    },
    removeReminder: (state, { payload }) => {
      const filteredActivity = state.activity.filter(
        (item) => item.id !== payload
      );
      filteredActivity ? (state.activity = filteredActivity) : state.activity;
    },
    editReminder: (state, { payload }: PayloadAction<IActivity>) => {
      const index = state.activity.findIndex((item) => item.id === payload.id);
      state.activity[index] = payload;
    },
    removeCurrentReminder: (
      state,
      { payload }: PayloadAction<{ type: ERemindersType; id: string }>
    ) => {
      const currentReminder = state.activity.find(
        (item) => item.id === payload.id
      );

      if (!currentReminder) {
        return;
      }

      const index = state.activity.findIndex((item) => item.id === payload.id);

      state.activity[index] = {
        ...currentReminder,
        nextRepeat: changeNextRepeat(
          currentReminder.repeat.id,
          currentReminder.when
        ),
      };
    },
  },
});

export const remindersActions = remindersSlice.actions;
export default remindersSlice;
