import { collection, limit, orderBy, query } from 'firebase/firestore';
import React, { useRef } from 'react';
import { GDSCButton } from '../../components/atoms/Button';
import { TextInput } from '../../components/atoms/TextInput';
import EmailLogCard from '../../components/molecules/EmailLogCard';

import { db } from '../../firebase/firebase';
import { useFirestoreQuery } from '../../hooks/useFirebaseQuery';

import { EmailLogTypeWithID } from '../../types/applicant';
import { TemplateEmailWrapper, TemplateText } from '../Email/styled';
import { LogWrapper, TemplateSelectWrapper } from './styled';

const EmailLog: React.FC<{
  template: string | null;
  setTemplate: (template: string | null) => void;
}> = ({ template, setTemplate }) => {
  const templateRef = useRef<HTMLInputElement>(null);
  const emailLogQuery = query(
    collection(db, 'emailLogs'),
    orderBy('uploadDate', 'desc'),
    limit(100),
  );

  const emailLogs = useFirestoreQuery<EmailLogTypeWithID[]>(emailLogQuery);

  return (
    <>
      <TemplateSelectWrapper>
        <TemplateText>
          {template ? '템플릿이 없어요 :(' : '선택한 템플릿 '}
          {template}
        </TemplateText>
        <TemplateEmailWrapper>
          <TextInput ref={templateRef} placeholder={'템플릿을 입력해주세요.'} />
        </TemplateEmailWrapper>
        <GDSCButton
          color={'blue900'}
          text={'템플릿 선택'}
          onClick={() => setTemplate(templateRef.current?.value ?? '')}
        />
      </TemplateSelectWrapper>
      {emailLogs && emailLogs.length > 0 && (
        <LogWrapper>
          <EmailLogCard emailLogs={emailLogs} />
        </LogWrapper>
      )}
    </>
  );
};

export default EmailLog;
