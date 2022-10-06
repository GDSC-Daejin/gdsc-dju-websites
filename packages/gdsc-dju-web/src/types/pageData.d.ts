export type RecruitmentId =
  | 'frontend'
  | 'backend'
  | 'android'
  | 'design'
  | 'ml'
  | 'beginner';

export type RecruitmentStatus = 'OPEN' | 'CLOSED' | 'ALWAYS_OPEN';

export interface AnnouncementData {
  id: RecruitmentId;
  name: string;
  status: RecruitmentStatus;
  skill: string;
  stack: string;
  people: string; //이런 분을 찾고 있어요
  plus: string; //이런 경험은 더 좋아요
  introduction: string;
  activity: string;
}
