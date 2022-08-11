import React, { memo } from 'react';
import { IApplicantChatType } from '../../../types/applicant';
import {
  ChatCardInner,
  ChatCardWrapper,
  ChatDate,
  ChatText,
  ChatUser,
} from './styled';

interface IChatCardProps extends IApplicantChatType {
  adminUser: string;
}

const ChatCard: React.FC<IChatCardProps> = ({
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
        <ChatText>{text}</ChatText>
      </ChatCardInner>
      <ChatDate>{filteredDate}</ChatDate>
    </ChatCardWrapper>
  );
};

export default memo(ChatCard);
