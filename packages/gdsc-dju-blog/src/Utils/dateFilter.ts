export const dateFilter = (date: string) => {
  const thisDate = new Date(date);

  return `${thisDate.getFullYear()}.${
    thisDate.getMonth() + 1
  }.${thisDate.getDate()}`;
};
