import React from 'react';
import {
  QuestionType,
  applicationQuestions,
} from '../../../context/recruitInfo';
import { IApplicantTypeWithID } from '../../../types/applicant';

import {
  ApplicationHeader,
  ApplicationText,
  ApplicationWrapper,
} from './styled';

const Application: React.FC<{
  applicantData: IApplicantTypeWithID;
}> = ({ applicantData }) => {
  const getQuestions = (applicantData: IApplicantTypeWithID) => {
    return {
      question1: applicantData.question1,
      question2: applicantData.question2,
      question3: applicantData.question3,
      question4: applicantData.question4,
      question5: applicantData.question5,
    };
  };
  const questionArray = Object.keys(
    getQuestions(applicantData),
  ) as QuestionType[];
  return (
    <ApplicationWrapper>
      {questionArray.map((key, index) => {
        return (
          <div key={index}>
            <ApplicationHeader>{applicationQuestions[key]}</ApplicationHeader>
            <p>
              {getQuestions(applicantData) &&
                getQuestions(applicantData)
                  [key].split('\n')
                  .map((line, id) => (
                    <ApplicationText key={id}>{line}</ApplicationText>
                  ))}
            </p>
          </div>
        );
      })}
    </ApplicationWrapper>
  );
};

export default Application;
