import ChatCard from '@common/cards/ChatCard';
import { ApplicantChat } from 'types/applicant';
import React, { PropsWithChildren, forwardRef } from 'react';

import { ApplicantChatList, ChatCardWrapper } from './styled';

interface Props {
  newMessages: ApplicantChat[];
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
