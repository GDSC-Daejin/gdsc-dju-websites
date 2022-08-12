import React from 'react';

import EmailLogCard from '@src/components/common/cards/EmailLogCard';
import { db } from '@src/firebase/firebase';
import { useFirestoreQuery } from '@src/hooks/useFirebaseQuery';
import { EmailLogTypeWithID } from '@src/types/applicant';
import { collection, limit, orderBy, query } from 'firebase/firestore';

import { LogWrapper } from './styled';

const EmailLog = () => {
  const emailLogQuery = query(
    collection(db, 'emailLogs'),
    orderBy('uploadDate', 'desc'),
    limit(100),
  );
  const emailLogs = useFirestoreQuery<EmailLogTypeWithID[]>(emailLogQuery);
  return (
    <LogWrapper>
      {emailLogs && emailLogs.length > 0 && (
        <EmailLogCard emailLogs={emailLogs} />
      )}
    </LogWrapper>
  );
};

export default EmailLog;
