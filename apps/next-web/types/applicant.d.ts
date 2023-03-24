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
export type StatusType =
  | 'DOCS'
  | 'INTERVIEW'
  | 'REJECTED_DOCS'
  | 'REJECTED_INTERVIEW'
  | 'HIRED';
