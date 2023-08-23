import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ERemindersType, ERepeatType } from "../../enums";
import { changeNextRepeat } from "../../helpers";

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

export interface IAppointmentItem {
  id: string;
  pet: {
    id: string;
    value: string;
  } | null;
  type: string;
  reminderType: ERemindersType;
  when: Date;
  description: string;
  doctorName?: string;
  address?: string;
}

export interface InterfaceReminderStore {
  activity: IActivity[];
  appointments: IAppointmentItem[];
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
    removeReminder: (state, { payload }: PayloadAction<{ id: string }>) => {
      const filteredActivity = state.activity.filter(
        (item) => item.id !== payload.id
      );
      filteredActivity ? (state.activity = filteredActivity) : state.activity;
    },
    editReminder: (state, { payload }: PayloadAction<IActivity>) => {
      const index = state.activity.findIndex((item) => item.id === payload.id);
      state.activity[index] = payload;
    },
    removeCurrentReminder: (
      state,
      { payload }: PayloadAction<{ id: string }>
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
    addAppointment: (state, { payload }: PayloadAction<IAppointmentItem>) => {
      state.appointments.push(payload);
    },
    removeAppointment: (state, { payload }: PayloadAction<{ id: string }>) => {
      const filteredActivity = state.appointments.filter(
        (item) => item.id !== payload.id
      );
      filteredActivity
        ? (state.appointments = filteredActivity)
        : state.appointments;
    },
    foo: (state) => {
      state.appointments = [];
    },
  },
});

export const remindersActions = remindersSlice.actions;
export default remindersSlice;
