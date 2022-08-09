import { atom } from 'jotai';
import API from '../apis/index';

export const RecruitmentState = {
  home: true,
  frontend: true,
  backend: true,
  android: true,
  design: true,
  ml: true,
  beginner: true,
};
export const recruitmentAtom = atom<typeof RecruitmentState>(RecruitmentState);

export const asyncGetRecruitmentStatusAtom = atom(null, async (get, set) => {
  const response = await API.getRecruitStatus();
  const data = response.data.data;
  await set(recruitmentAtom, data);
});
