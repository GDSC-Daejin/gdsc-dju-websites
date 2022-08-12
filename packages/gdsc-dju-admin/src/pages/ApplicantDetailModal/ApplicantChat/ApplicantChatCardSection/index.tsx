import ChatCard from '@common/cards/ChatCard';
import { IApplicantChatType } from '@type/applicant';
import React, { PropsWithChildren, forwardRef } from 'react';

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
