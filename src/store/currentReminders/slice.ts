import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ERemindersType } from "../../enums";
import { IActivityItem, IAppointmentItem } from "../../interfaces";
import { InterfaceReminderStore } from "../remindersStore/slice";

interface ITodayReminders {
  activity: IActivityItem[];
  appointment: IAppointmentItem[];
}

const initialState: ITodayReminders | null = {
  activity: [
    // {
    //   petId: "1",
    //   remindId: "2",
    //   type: "medical",
    //   time: "2:00pm",
    //   header: "Foo",
    //   reminderType: ERemindersType.ACTIVITY,
    //   petName: "Tefa",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae culpa",
    // },
  ],
  appointment: [
    // {
    //   petId: "1",
    //   remindId: "3",
    //   time: "2:00pm",
    //   type: "medical",
    //   header: "Foo",
    //   reminderType: ERemindersType.APPOINTMENT,
    //   petName: "Tefa",
    //   doctorName: "Etkin",
    //   description: "You have appointment with Chloe to Dr. Etkin at 5:00 pm.",
    //   address: "2806 Avenue U, Brooklyn, NY 11229, United States",
    // },
  ],
};

const todayRemindersSlice = createSlice({
  name: "todayReminders",
  initialState,
  reducers: {
    removeActivity: (
      state,
      { payload }: PayloadAction<{ type: ERemindersType; value: string }>
    ) => {
      // @ts-ignore
      state[payload.type] = state[payload.type].filter(
        (item: { remindId: string }) => item.remindId !== payload.value
      );
    },
    getCurrentReminders: (
      state,
      { payload }: PayloadAction<InterfaceReminderStore[]>
    ) => {},
    refreshReminders: (state, { payload }) => {},
  },
});

export const todayRemindersActions = todayRemindersSlice.actions;
export default todayRemindersSlice;
