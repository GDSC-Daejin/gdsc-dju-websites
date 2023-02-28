export interface FormValue {
  name: string;
  phoneNumber: string;
  major: string;
  email: string;
  studentID: string;
  question1: string;
  question2: string;
  question3: string;
  question4: string;
  question5: string;
  link0: string;
  link1: string;
  linkAnnounce: string;
  preferredPosition?: string;
  recommender: string;
}
export type FormElementsType<T extends string> = {
  [key in T]?: {
    label?: string;
    placeholder?: string;
    type: 'INPUT' | 'TEXT_AREA' | 'TEXT';
    text?: string;
    notice?: string;
    required: {
      value: boolean;
      message: string;
    };
    pattern?: {
      value: RegExp;
      message: string;
    };
    minLength?: {
      value: number;
      message: string;
    };
  };
};
