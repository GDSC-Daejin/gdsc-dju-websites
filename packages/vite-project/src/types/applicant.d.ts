import { theme } from '../styles/theme';

export interface IApplicantParams {
  name: string;
  position: string;
  email: string;
  phoneNumber: string;
}

export interface IInputRegister {
  email: string;
  fileURL: string;
  link0: string;
  link1: string;
  major: string;
  name: string;
  phoneNumber: string;
  recommender: string;
  studentID: string;
}

export interface IRegisterApplicantType extends IInputRegister {
  status: StatusType;
  position: string;
  generation: string;
  uploadDate: Date;
}

export interface IApplicantType {
  status: StatusType;
  email: string;
  fileURL: string;
  link0: string;
  link1: string;
  major: string;
  name: string;
  question1: string;
  question2: string;
  question3: string;
  question4: string;
  question5: string;
  phoneNumber: string;
  position: string;
  recommender: string;
  studentID: string;
  generation: number;
  uploadDate: {
    seconds: number;
    nanoseconds: number;
  };
}
export type StatusType =
  | 'DOCS'
  | 'INTERVIEW'
  | 'REJECTED_DOCS'
  | 'REJECTED_INTERVIEW'
  | 'HIRED';

export interface IApplicantTypeWithID extends IApplicantType {
  id: string;
}
export interface IApplicantCountType {
  isDOCS: number;
  isINTERVIEW: number;
  isREJECTED_DOCS: number;
  isREJECTED_INTERVIEW: number;
  isHIRED: number;
}
export type ApplicantCountType =
  | 'isDOCS'
  | 'isINTERVIEW'
  | 'isREJECTED_DOCS'
  | 'isREJECTED_INTERVIEW'
  | 'isHIRED';
export type ApplicantListType = {
  [key in ApplicantCountType]: IApplicantTypeWithID[];
};
export interface IApplicantChatType {
  text: string;
  createdAt: number;
  id: string;
  uid: string;
  displayName: string;
  isRead: boolean;
}
export type StatusBadgeType = {
  [key in StatusType]: {
    color: keyof typeof theme.colors;
    text: string;
  };
};

export interface EmailLogType {
  email: string;
  name: string;
  applicantID: string;
  applicantStatus: StatusType;
  uploadDate: Date;
  sender: string;
  status: number;
}
export interface getEmailLogType {
  email: string;
  name: string;
  applicantID: string;
  applicantStatus: StatusType;
  uploadDate: {
    seconds: number;
    nanoseconds: number;
  };
  sender: string;
  status: number;
}
export interface EmailLogTypeWithID extends getEmailLogType {
  id: string;
}
