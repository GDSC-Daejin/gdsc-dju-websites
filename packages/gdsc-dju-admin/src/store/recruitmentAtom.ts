import { atom } from 'jotai';
import API from '../apis/index';

export const recruitmentAtom = atom({
  home: true,
  frontend: true,
  backend: true,
  android: true,
  design: true,
  ml: true,
  beginner: true,
});

export const recruitmentWriteOnlyAtom = atom(null, async (get, set) => {
  const response = await API.getRecruitStatus();
  const recruitmentData = response.data.data;
  set(recruitmentAtom, recruitmentData);
});

export const recruitmentReadOnlyAtom = atom((get) => {
  return get(recruitmentAtom);
});
