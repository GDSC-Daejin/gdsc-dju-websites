export const checkEventEnd = (end: string) => {
  let today = new Date();
  const endDate = end.split(' ')[0];
  const endTime = end.split(' ')[1];
  const endHour = Number(endTime.split(':')[0]);
  const endYear = Number(endDate.split('-')[0]);
  const endMonth = Number(endDate.split('-')[1]);
  const endDay = Number(endDate.split('-')[2]);
  let year = Number(today.getFullYear());
  let month = Number(today.getMonth() + 1);
  let day = Number(today.getDate());
  let hour = Number(today.getHours());
  const date1 = new Date(endYear, endMonth, endDay, endHour);
  const date2 = new Date(year, month, day, hour);

  return date1 < date2;
};
