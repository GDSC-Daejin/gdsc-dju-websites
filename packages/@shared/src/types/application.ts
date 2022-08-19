import { Questions } from './recruit';

export type StatusType =
  | 'DOCS'
  | 'INTERVIEW'
  | 'REJECTED_DOCS'
  | 'REJECTED_INTERVIEW'
  | 'HIRED';

export interface ApplicantInfo {
  status: StatusType;
  email: string;
  fileURL: string;
  link0: string;
  link1: string;
  major: string;
  name: string;
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

export interface ApplicationWithoutID extends Questions {
  status: StatusType;
  email: string;
  fileURL: string;
  link0: string;
  link1: string;
  major: string;
  name: string;
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

export interface Application extends ApplicationWithoutID {
  id: string;
}
