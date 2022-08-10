import { atom } from 'jotai';
import API from '../apis/index';

export interface RecruitmentAtom {
  home: boolean;
  frontend: boolean;
  backend: boolean;
  android: boolean;
  design: boolean;
  ml: boolean;
  beginner: boolean;
}

export const recruitmentAtom = atom<RecruitmentAtom | null>(null);

export const recruitmentWriteOnlyAtom = atom(null, async (get, set) => {
  const response = await API.getRecruitStatus();
  const recruitmentData = response.data.data;
  set(recruitmentAtom, recruitmentData);
});

export const recruitmentReadOnlyAtom = atom((get) => {
  return get(recruitmentAtom);
});
