import { atom, selector } from 'recoil';
import API from '../apis/index';

const RECRUITMENT = 'recruitment';
const RECRUITMENT_SELECTOR = 'recruitmentSelector';
export const RecruitmentState = {
  home: true,
  frontend: true,
  backend: true,
  android: true,
  design: true,
  ml: true,
  beginner: true,
};
export const recruitmentState = atom<typeof RecruitmentState>({
  key: RECRUITMENT,
  default: RecruitmentState,
});

export const recruitmentSelector = selector({
  key: RECRUITMENT_SELECTOR,
  get: async () => {
    const res = await API.getRecruitStatus();
    return res.data.data;
  },
  set: ({ set }, newValue) => {
    set(recruitmentState, newValue);
  },
});
