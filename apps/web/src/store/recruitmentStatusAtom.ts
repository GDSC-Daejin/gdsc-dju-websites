import { atom } from 'jotai';

import API from '../apis/index';

export const RecruitmentState = {
  home: false,
  frontend: false,
  backend: false,
  android: false,
  design: false,
  ml: false,
  beginner: false,
};
export const recruitmentAtom = atom<typeof RecruitmentState>(RecruitmentState);

export const asyncGetRecruitmentStatusAtom = atom(null, async (get, set) => {
  const response = await API.getRecruitStatus();
  const data = response.data.data;
  await set(recruitmentAtom, data);
});
