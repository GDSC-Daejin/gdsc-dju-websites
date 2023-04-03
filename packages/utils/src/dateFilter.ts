/**
 *
 * @param date
 * @description 날짜 포맷 (ex: YYYY-MM-DD HH:mm : 2020-01-01 00:00)
 * @param format
 * @description 날짜 포맷 (ex: YYYY-MM-DD HH:mm : 2020-01-01 00:00)
 *
 * ```typescript
 *  import { dateFilter } from '@gdsc-dju/utils';
 *  dateFilter(new Date(), 'YYYY-MM-DD HH:mm');
 * ```
 */

export const dateFilter = (date: string, format: string) => {
  const dateObj = new Date(date);
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  const hour = dateObj.getHours();
  const minute = dateObj.getMinutes();
  const year = dateObj.getFullYear();

  const dateStr = format
    .replace(/YYYY/g, year.toString())
    .replace(/MM/g, month.toString().padStart(2, '0'))
    .replace(/DD/g, day.toString().padStart(2, '0'))
    .replace(/HH/g, hour.toString().padStart(2, '0'))
    .replace(/mm/g, minute.toString().padStart(2, '0'));

  return dateStr;
};
