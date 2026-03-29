import { atom } from 'jotai';

import { PositionType } from '@type/pageData';

import API from '../apis/index';

export const RecruitmentState: Record<PositionType, boolean> = {
  frontend: false,
  backend: false,
  android: false,
  designer: false,
  ios: false,
  designBeginner: false,
  ml: false,
  beginner: false,
};

export const recruitmentAtom = atom<typeof RecruitmentState>(RecruitmentState);

export const asyncGetRecruitmentStatusAtom = atom(null, async (get, set) => {
  const response = await API.getRecruitStatus();
  const data = response.data.data;
  // await set(recruitmentAtom, data);
});
