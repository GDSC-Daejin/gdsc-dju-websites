function padTo2Digits(num: number) {
  return num.toString().padStart(2, '0');
}
export const dateFilter = (date: string) => {
  const thisDate = new Date(date);

  return [
    thisDate.getFullYear(),
    padTo2Digits(thisDate.getMonth() + 1),
    padTo2Digits(thisDate.getDate()),
  ].join('.');
};

