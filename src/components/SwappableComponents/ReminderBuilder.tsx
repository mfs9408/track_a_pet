import React from "react";
import { RenderItemParams } from "react-native-draggable-flatlist";
import { IActivity } from "../../store/remindersStore/slice";
import { ERemindersType } from "../../enums";
import SwappableReminder from "./SwappableReminder";
import ActivityCard from "./ActivityCard";
import AppointmentCard from "./AppointmentCard";
import { IAppointmentItem } from "../../interfaces";

export type TReminderBuilder = IActivity | IAppointmentItem;

const ReminderBuilder = (
  params: RenderItemParams<any>,
  item: TReminderBuilder,
  itemRefs: React.MutableRefObject<Map<any, any>>,
  type: ERemindersType
) => {
  switch (type) {
    case ERemindersType.CURRENT_REMINDER_PAGE:
      return <SwappableReminder itemRefs={itemRefs} {...params} />;
    case ERemindersType.MAIN_PAGE_ACTIVITY:
      return <ActivityCard itemRefs={itemRefs} {...params} />;
    case ERemindersType.APPOINTMENT:
      return <AppointmentCard itemRefs={itemRefs} {...params} />;
  }
};

export default ReminderBuilder;
