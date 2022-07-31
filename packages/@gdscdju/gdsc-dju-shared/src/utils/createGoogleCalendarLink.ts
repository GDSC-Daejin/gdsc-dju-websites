import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { stringify } from 'query-string';

interface CalendarEvent {
  title: string;
  start: any;
  end?: any;
  duration?: [number, dayjs.UnitType];
  allDay?: boolean;
  description?: string;
  location?: string;
  organizer?: CalendarEventOrganizer;
  busy?: boolean;
  guests?: string[];
  url?: string;
}
interface CalendarEventOrganizer {
  name: string;
  email: string;
}
interface NormalizedCalendarEvent
  extends Omit<CalendarEvent, 'start' | 'end' | 'duration'> {
  startUtc: dayjs.Dayjs;
  endUtc: dayjs.Dayjs;
}

interface Google extends Record<string, string | boolean | number | undefined> {
  action: string;
  text: string;
  dates: string;
  details?: string;
  location?: string;
  trp?: boolean;
  sprop?: string;
  add?: string;
  src?: string;
  recur?: string;
}

export const TimeFormats = {
  dateTimeWithOffset: 'YYYY-MM-DD[T]HH:mm:ssZ',
  dateTimeUTC: 'YYYYMMDD[T]HHmmss[Z]',
  allDay: 'YYYYMMDD',
};

dayjs.extend(utc);
function formatTimes(
  { allDay, startUtc, endUtc }: NormalizedCalendarEvent,
  dateTimeFormat: keyof typeof TimeFormats,
): { start: string; end: string } {
  const format = TimeFormats[dateTimeFormat];
  return { start: startUtc.format(format), end: endUtc.format(format) };
}
export const eventify = (event: CalendarEvent): NormalizedCalendarEvent => {
  const { start, end, duration, ...rest } = event;
  const startUtc = dayjs(start).utc();
  const endUtc = end
    ? dayjs(end).utc()
    : (() => {
        if (event.allDay) {
          return startUtc.add(1, 'day');
        }
        if (duration && duration.length == 2) {
          const value = Number(duration[0]);
          const unit = duration[1];
          return startUtc.add(value, unit as dayjs.ManipulateType);
        }
        return dayjs().utc();
      })();
  return {
    ...rest,
    startUtc,
    endUtc,
  };
};

export const google = (calendarEvent: CalendarEvent): string => {
  const event = eventify(calendarEvent);
  const { start, end } = formatTimes(
    event,
    event.allDay ? 'allDay' : 'dateTimeUTC',
  );
  const details: Google = {
    action: 'TEMPLATE',
    text: event.title,
    details: event.description,
    location: event.location,
    trp: event.busy,
    dates: start + '/' + end,
  };
  if (event.guests && event.guests.length) {
    details.add = event.guests.join();
  }
  return `https://calendar.google.com/calendar/render?${stringify(details)}`;
};
