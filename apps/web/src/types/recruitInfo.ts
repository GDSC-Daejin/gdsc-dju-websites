export const isDevelop = import.meta.env.MODE === 'development';

const GENERATION = isDevelop ? 'dev' : 3;

interface IRecruitInfo {
  GENERATION: string;
  COLLECTION: string;
}

export const recruitInfo: IRecruitInfo = {
  GENERATION: `${GENERATION}`,
  COLLECTION: `applicants-${GENERATION}`,
};

export type QuestionType = `question${number}`;

export type IApplicationQuestions = {
  [key in QuestionType]: string;
};
