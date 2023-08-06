export const getDate = (currentDate?: Date, date?: boolean, time?: boolean) => {
  const dateToLocal = currentDate || new Date();

  return dateToLocal.toLocaleString("en-US", {
    month: (date && "numeric") || undefined,
    day: (date && "numeric") || undefined,
    year: (date && "numeric") || undefined,
    hour: (time && "numeric") || undefined,
    minute: (time && "numeric") || undefined,
    hour12: true,
  });
};
