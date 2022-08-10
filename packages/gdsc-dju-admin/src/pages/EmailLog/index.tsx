import { collection, limit, orderBy, query } from 'firebase/firestore';
import React from 'react';
import EmailLogCard from '../../components/molecules/EmailLogCard';

import { db } from '../../firebase/firebase';
import { useFirestoreQuery } from '../../hooks/useFirebaseQuery';

import { EmailLogTypeWithID } from '../../types/applicant';
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
