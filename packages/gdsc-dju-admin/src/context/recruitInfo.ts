export const isDevelop = import.meta.env.MODE === 'development';

const GENERATION = isDevelop ? 'dev' : 2;

interface IRecruitInfo {
  GENERATION: string;
  COLLECTION: string;
}

export const recruitInfo: IRecruitInfo = {
  GENERATION: `${GENERATION}`,
  COLLECTION: `applicants-${GENERATION}`,
};

export const position = {
  home: 'Home',
  frontend: 'Frontend Developer',
  backend: 'Backend Developer',
  android: 'Android Developer',
  beginner: 'Beginner',
  design: 'Designer',
  ml: 'Machine Learning',
};
