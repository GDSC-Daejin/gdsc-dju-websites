export const eventDateFilter = (start: string, end: string) => {
  const startDate = start.split(' ')[0];
  const startYear = startDate.split('-')[0];
  const startMonth = startDate.split('-')[1];
  const startDay = startDate.split('-')[2];
  const endDate = end.split(' ')[0];
  const startTime = start.split(' ')[1];
  const endTime = end.split(' ')[1];
  if (startDate == endDate) {
    return `${startYear}. ${startMonth}. ${startDay}`;
  } else {
    return `${startDate} - ${endDate}`;
  }
};
export const eventTimeFilter = (start: string, end: string) => {
  const startDate = start.split(' ')[0];
  const endDate = end.split(' ')[0];
  const StartDay = startDate.split('-')[2];
  const endDay = endDate.split('-')[2];
  const startTime = start.split(' ')[1];
  const endTime = end.split(' ')[1];
  if (startDate == endDate) {
    return `${startTime} - ${endTime}`;
  } else {
    return `${StartDay}일 ${startTime} - ${endDay}일 ${endTime}`;
  }
};
