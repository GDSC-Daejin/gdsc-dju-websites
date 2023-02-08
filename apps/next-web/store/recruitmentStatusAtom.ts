import { atom } from 'jotai';

import { PositionType } from '../types/pageData';

export const RecruitmentState: Record<PositionType, boolean> = {
  frontend: true,
  backend: true,
  android: true,
  designer: true,
  ios: true,
  designBeginner: true,
  ml: true,
  beginner: true,
};
export const recruitmentAtom = atom<typeof RecruitmentState>(RecruitmentState);

// export const asyncGetRecruitmentStatusAtom = atom(null, async (get, set) => {
//   const response = await API.getRecruitStatus();
//   const data = response.data.data;
//   // await set(recruitmentAtom, data);
// });
