export const getIcon = (value: string) => {
  switch (value) {
    case "medical":
      return "medical-services";
    case "pets":
      return "pets";
    case "announcement":
      return "announcement";
    default:
      return "add-task";
  }
};
