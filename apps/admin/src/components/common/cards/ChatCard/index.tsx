import React, { memo } from 'react';

import { IApplicantChatType } from '@type/applicant';

import {
  ChatCardInner,
  ChatCardWrapper,
  ChatDate,
  ChatText,
  ChatUser,
} from './styled';

interface Props extends IApplicantChatType {
  adminUser: string;
}

const ChatCard: React.FC<Props> = ({
  text,
  createdAt,
  uid,
  displayName,
  adminUser,
}) => {
  const uploadDate = new Date(createdAt);
  const year = uploadDate.getFullYear();
  const month = uploadDate.getMonth() + 1;
  const date = uploadDate.getDate();
  const time = uploadDate.getHours() + ':' + uploadDate.getMinutes();

  const filteredDate = `${year}-${month >= 10 ? month : '0' + month}-${
    date >= 10 ? date : '0' + date
  } ${time}`;

  return (
    <ChatCardWrapper>
      <ChatCardInner isUser={adminUser === uid}>
        <ChatUser>{displayName}</ChatUser>
        <div>
          {text.split('\n').map((text, id) => (
            <ChatText key={id}>{text}</ChatText>
          ))}
        </div>
      </ChatCardInner>
      <ChatDate>{filteredDate}</ChatDate>
    </ChatCardWrapper>
  );
};

export default memo(ChatCard);
