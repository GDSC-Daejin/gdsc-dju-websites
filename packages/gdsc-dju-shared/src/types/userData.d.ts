export interface UserDataType {
  [x: string]: {
    name: string;
    profileImage: string;
    role: 'GDSC DJU Lead' | 'GDSC DJU Core' | 'GDSC DJU Member';
    position:
      | 'Frontend Developer'
      | 'Android Developer'
      | 'Backend Developer'
      | 'Designer'
      | 'Machine Learning Engineer'
      | 'Beginner'
      | 'Project Team';
  };
}
