import React, { memo } from 'react';
import { IApplicantChatType } from '../../../types/applicant';
import { ChatCardInner, ChatDate, ChatText, ChatUser } from './styled';

interface IChatCardProps extends IApplicantChatType {
  adminUser: string;
}

const ChatCard: React.FC<IChatCardProps> = ({
  text,
  createdAt,
  uid,
  displayName,
  isRead,
  adminUser,
}) => {
  const uploadDate = new Date(createdAt).toString().split('GMT')[0];
  return (
    <ChatCardInner isUser={adminUser === uid}>
      <ChatUser>{displayName}</ChatUser>
      <ChatText>{text}</ChatText>
      {/*<p>{uid}</p>*/}
      {/*<p>{isRead}</p>*/}
      <ChatDate>{uploadDate}</ChatDate>
    </ChatCardInner>
  );
};

export default memo(ChatCard);
