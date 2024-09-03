export const isDevelop = import.meta.env.MODE === 'development';

//2기, 2.5기 모집

const GENERATION = isDevelop ? 'dev' : 4;

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

// const QuestionGroupNames = ['FE', 'BE', 'DE', 'AN', 'ML', 'NB', 'DEV'] as const;
//
// export type QuestionGroup = typeof QuestionGroupNames[number];
//
// type MakeQuestionTokenSet<
//     TokenName extends QuestionGroup,
//     TokenNumber extends number[],
//     > = `${TokenName}${TokenNumber[number]}`;
//
// export type QuestionType = MakeQuestionTokenSet<'DEV', [1, 2, 3, 4, 5]>;
// export type IApplicationQuestions = {
//   [key in QuestionType]: string;
// };
export type QuestionType =
  | 'question1'
  | 'question2'
  | 'question3'
  | 'question4'
  | 'question5';
export type IApplicationQuestions = {
  [key in QuestionType]: string;
};

export const applicationQuestions: IApplicationQuestions = {
  question1: '1. 활용할 수 있는 프레임워크, 라이브러리를 알려주세요.',
  question2: '2. 프로젝트 협업 경험이 있다면 자세하게 알려주세요.',
  question3: '3. 어떤 리드가 좋은 리드라고 생각하시는지 알려주세요.',
  question4: '4. 팀원과 갈등상황은 어떻게 해결하시나요?',
  question5: '5. 본인만의 공부방법이 있다면 어떤 것이 있나요?',
};
