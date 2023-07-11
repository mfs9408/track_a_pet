import React from "react";
import ActivityCard from "../ReminderCards/ActivityCard";
import AppointmentCard from "../ReminderCards/AppointmentCard";
import { IActivityItem } from "../../interfaces";
import { ERemindersType } from "../../enums";

export type RowItemProps = {
  item: IActivityItem;
  drag: () => void;
  onPressDelete: () => void;
  itemRefs: React.MutableRefObject<Map<any, any>>;
};

const RemindBuilder = (data: RowItemProps) => {
  switch (data.item.reminderType) {
    case ERemindersType.ACTIVITY:
      return <ActivityCard {...data} />;

    case ERemindersType.APPOINTMENT:
      return <AppointmentCard {...data} />;
  }
};

export default RemindBuilder;
