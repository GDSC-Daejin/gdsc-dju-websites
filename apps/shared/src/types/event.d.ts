export type EventsType = 'event' | 'session';

export interface DefaultEventType {
  title: string;
  description: string;
  start: string;
  end: string;
  applyLink: string;
}

export interface EventType extends DefaultEventType {
  type: 'event';
}

export interface SessionType {
  title: string;
  time: string;
  profileImage: string;
  name: string;
  position: string;
}

export interface SessionEventType extends DefaultEventType {
  sessions: SessionType[];
  type: 'session';
}

export type EventsDataType = (SessionEventType | EventType)[];
