import React from 'react';
import { Application, QuestionToken } from '@gdsc-dju/shared/types';
import {
  beginnerQuestions,
  designerQuestions,
  developerQuestions,
} from '@gdsc-dju/shared/contents';

import {
  ApplicationSubTitle,
  ApplicationText,
  ApplicationTitle,
  ApplicationWrapper,
} from './styled';

const ApplicationContent: React.FC<{
  applicantData: Application;
}> = ({ applicantData }) => {
  const getPositionQuestion = (applicantData: Application) => {
    const positionName = applicantData.position.toLowerCase();

    if (positionName.includes('developer')) {
      return developerQuestions;
    }
    if (positionName.includes('designer')) {
      return designerQuestions;
    } else {
      return beginnerQuestions;
    }
  };
  const questions = getPositionQuestion(applicantData);

  const answers = {
    question1: applicantData.question1,
    question2: applicantData.question2,
    question3: applicantData.question3,
    question4: applicantData.question4,
    question5: applicantData.question5,
  };
  const questionArray: QuestionToken[] = [
    'question1',
    'question2',
    'question3',
    'question4',
    'question5',
  ];
  return (
    <ApplicationWrapper>
      {questionArray.map((key, index) => {
        return (
          <div key={index}>
            <ApplicationTitle>{questions[key]}</ApplicationTitle>
            <ApplicationSubTitle>1233</ApplicationSubTitle>
            <p>
              {answers[key].split('\n').map((line, id) => (
                <ApplicationText key={id}>{line}</ApplicationText>
              ))}
            </p>
          </div>
        );
      })}
    </ApplicationWrapper>
  );
};

export default ApplicationContent;
