import React, { PropsWithChildren, forwardRef } from 'react';
import { IApplicantChatType } from '../../../types/applicant';
import ChatCard from '../ChatCard';
import { ApplicantChatList, ChatCardWrapper } from './styled';

interface Props {
  newMessages: IApplicantChatType[];
  adminUser: string;
}
const ApplicantSection = forwardRef<HTMLDivElement, PropsWithChildren<Props>>(
  (props, ref) => {
    const { newMessages, adminUser } = props;
    const reversedMessages = [...newMessages].reverse();

    return (
      <ApplicantChatList>
        {reversedMessages.map((message) => (
          <ChatCardWrapper
            ref={ref}
            key={message.id}
            isUser={adminUser === message.uid}
          >
            <ChatCard {...message} adminUser={adminUser} />
          </ChatCardWrapper>
        ))}
      </ApplicantChatList>
    );
  },
);
export default ApplicantSection;
