import { ERepeatType } from "../enums";
import { IActivity, IAppointmentItem } from "../store/remindersStore/slice";

export const getDate = (currentDate?: Date, date?: boolean, time?: boolean) => {
  const dateToLocal = currentDate ? new Date(currentDate) : new Date();

  return dateToLocal.toLocaleString("en-US", {
    month: (date && "numeric") || undefined,
    day: (date && "numeric") || undefined,
    year: (date && "numeric") || undefined,
    hour: (time && "numeric") || undefined,
    minute: (time && "numeric") || undefined,
    hour12: true,
  });
};

export const changeNextRepeat = (type: ERepeatType, reminderTime: Date) => {
  switch (type) {
    case ERepeatType.NEVER:
      return null;

    case ERepeatType.DAILY:
      return addDays(reminderTime, 1);

    case ERepeatType.EVERY_2_DAYS:
      return addDays(reminderTime, 2);
  }
};

export const addDays = (str: Date, days: number) => {
  const myDate = new Date(str);

  myDate.setDate(myDate.getDate() + parseInt(String(days)));

  return myDate;
};

export const filterTodayEvents = (array: IActivity[] | IAppointmentItem[]) => {
  return [...array].filter(({ when }) => {
    const currentTime = new Date();
    const reminderTime = new Date(when);

    return (
      currentTime < reminderTime &&
      currentTime.getDate() === reminderTime.getDate()
    );
  });
};
