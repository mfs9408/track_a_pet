export const isDataInObject = (object: unknown) => {
  const dataArray = Object.values(object as object).filter((item) => item);

  return dataArray.length > 0;
};
