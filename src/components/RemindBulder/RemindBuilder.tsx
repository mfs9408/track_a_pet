import React from "react";
import ActivityCard from "../ReminderCards/ActivityCard";
import {IActivity} from "../../store/remindersStore/slice";

export type RowItemProps = {
  item: IActivity;
  drag: () => void;
  onPressDelete: () => void;
  itemRefs: React.MutableRefObject<Map<any, any>>;
};

const RemindBuilder = (data: RowItemProps) => {
  // switch (data.item.type) {
  //   case ERemindersType.ACTIVITY:
  //     return <ActivityCard {...data} />;
  //
  //   // case ERemindersType.APPOINTMENT:
  //   //   return <AppointmentCard {...data} />;
  // }

  return <ActivityCard {...data} />
};

export default RemindBuilder;
