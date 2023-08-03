export const getDate = (date?: Date) => {
  const currentDate = date || new Date();

  return currentDate.toLocaleString("en-US", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};
