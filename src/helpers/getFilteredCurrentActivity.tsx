import { IActivity } from "../store/remindersStore/slice";

export const getFilteredCurrentActivity = (
  activity: IActivity[],
  time: number
) => {
  return [...activity].filter(({ nextRepeat, id }) => {
    if (!nextRepeat) {
      return null;
    }

    const currentTime = new Date(time);
    const reminderTime = new Date(nextRepeat);

    return currentTime < reminderTime;
  });
};
