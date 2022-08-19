import { ColorScheme } from '@gdsc-dju/styled-components';

export type StatusType =
  | 'DOCS'
  | 'INTERVIEW'
  | 'REJECTED_DOCS'
  | 'REJECTED_INTERVIEW'
  | 'HIRED';

export interface ApplicantChat {
  text: string;
  createdAt: number;
  id: string;
  uid: string;
  displayName: string;
  isRead: boolean;
}
export type StatusBadgeType = {
  [key in StatusType]: {
    color: keyof ColorScheme;
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
