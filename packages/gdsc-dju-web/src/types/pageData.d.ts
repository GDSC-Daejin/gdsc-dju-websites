export type PositionType =
  | 'frontend'
  | 'backend'
  | 'android'
  | 'designer'
  | 'ml'
  | 'ios'
  | 'beginner'
  | 'designBeginner';

export type RecruitmentStatus = 'OPEN' | 'CLOSED' | 'ALWAYS_OPEN';

export interface AnnouncementData {
  id: PositionType;
  name: string;
  status: RecruitmentStatus;
  designDescription?: string;
  developDescription?: string;
  skill: string;
  stack: string;
  people: string; //이런 분을 찾고 있어요
  plus: string; //이런 경험은 더 좋아요
  introduction: string;
  activity: string;
}
