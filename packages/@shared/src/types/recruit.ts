export type QuestionToken =
  | 'question1'
  | 'question2'
  | 'question3'
  | 'question4'
  | 'question5';

export type Questions = {
  [key in QuestionToken]: string;
};
