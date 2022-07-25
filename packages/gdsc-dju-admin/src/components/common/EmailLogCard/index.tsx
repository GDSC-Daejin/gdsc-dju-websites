import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { EmailLogTypeWithID } from '../../../types/applicant';
import { timeFilter } from '../../../utils/timeFilter';
import StatusBadge from '../Statusbadge';

interface IEmailLogBoxProps {
  emailLogs: EmailLogTypeWithID[];
}
interface IEmailLogProps {
  emailLog: EmailLogTypeWithID;
  lastDate: string;
}

const StyledRowLine = styled.div`
  background: ${({ theme }) => theme.colors.grey400};
  width: 33%;
  height: 1px;
`;
const 구분선 = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  box-sizing: border-box;
  padding: 6px 0;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.body2};
  color: ${({ theme }) => theme.colors.grey700};
`;
const EmailLogBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  font-size: ${({ theme }) => theme.fontSize.body2};
  color: ${({ theme }) => theme.colors.grey700};
  width: 100%;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 14px 20px;
  box-shadow: 0 2px 12px 0 ${({ theme }) => theme.colors.grey300};
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.white};
`;
const EmailLogText = styled.div<{ email?: boolean }>`
  width: 70px;
  white-space: nowrap;
  overflow: hidden;
  display: flex;
  text-overflow: ellipsis;
  font-size: ${({ theme }) => theme.fontSize.body2};
  justify-content: center;
  ${({ email }) =>
    email &&
    css`
      display: block;
      width: 100px;
    `}
`;
const EmailLogBadgeWrapper = styled.div`
  width: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EmailLogSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 600px;
  align-items: center;
  margin: 0 auto;
  gap: 10px;
  height: fit-content;
  padding: 20px 0;
`;
const EmailLogCard: React.FC<IEmailLogBoxProps> = ({ emailLogs }) => {
  const [lastDate, setLastDate] = React.useState('');
  useEffect(() => {
    emailLogs.length > 0 &&
      setLastDate(timeFilter(emailLogs[0].uploadDate.seconds).Y_M_D);
  }, [emailLogs]);

  return (
    <EmailLogSection>
      {lastDate && (
        <구분선>
          <StyledRowLine />
          {lastDate}
          <StyledRowLine />
        </구분선>
      )}
      {emailLogs &&
        emailLogs.map((log, index) => {
          const number = index == 0 ? 0 : index - 1;
          const lastDate = timeFilter(
            emailLogs[number].uploadDate.seconds,
          ).Y_M_D;
          return (
            <EmailLog emailLog={log} lastDate={lastDate ?? ''} key={log.id} />
          );
        })}
    </EmailLogSection>
  );
};
const EmailLog: React.FC<IEmailLogProps> = ({ emailLog, lastDate }) => {
  const date = timeFilter(emailLog.uploadDate.seconds).Y_M_D;

  return (
    <>
      {date !== lastDate && (
        <구분선>
          <StyledRowLine />
          {date}
          <StyledRowLine />
        </구분선>
      )}
      <EmailLogBox key={emailLog.id}>
        <EmailLogText>{emailLog.name}</EmailLogText>
        <EmailLogText email={true}>{emailLog.email}</EmailLogText>
        <EmailLogText>{emailLog.sender}</EmailLogText>
        <EmailLogText>
          {timeFilter(emailLog.uploadDate.seconds).time}
        </EmailLogText>
        <EmailLogText>{emailLog.status}</EmailLogText>
        <EmailLogBadgeWrapper>
          <StatusBadge status={emailLog.applicantStatus} />
        </EmailLogBadgeWrapper>
      </EmailLogBox>
    </>
  );
};

export default EmailLogCard;
