import React, {
  forwardRef,
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { db } from '../../../firebase/firebase';
import { useFirestoreQuery } from '../../../hooks/useFirebaseQuery';
import { useRecoilValue } from 'recoil';
import { adminUserState } from '../../../store/localUser';
import { IApplicantChatType } from '../../../types/applicant';
import ChatCard from '../ChatCard';
import {
  ApplicantChatBottomBar,
  ApplicantChatInput,
  ApplicantChatList,
  ApplicantChatSectionWrapper,
  ApplicantChatSendButton,
  ChatCardWrapper,
} from './styled';
import { addDoc, collection, limit, orderBy, query } from 'firebase/firestore';

interface IApplicantChatProps {
  newMessages: IApplicantChatType[];
  adminUser: string;
}
const ApplicantChat = forwardRef<
  HTMLDivElement,
  PropsWithChildren<IApplicantChatProps>
>((props, ref) => {
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
});
ApplicantChat.displayName = 'ApplicantChat';

interface IApplicantChatSectionProps {
  applicantId: string;
}

const ApplicantChatSection: React.FC<IApplicantChatSectionProps> = ({
  applicantId,
}) => {
  const [newMessage, setNewMessage] = useState('');
  const chatSectionRef = useRef<HTMLDivElement>(null);
  const adminUser = useRecoilValue(adminUserState);

  const q = query(
    collection(db, `chats-${applicantId}`),
    orderBy('createdAt', 'asc'),
    limit(100),
  );
  const chatRef = collection(db, `chats-${applicantId}`);

  const newMessages = useFirestoreQuery(q);

  const newMessageHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setNewMessage(e.target.value);
    },
    [],
  );
  const handleOnSubmit = async () => {
    // 입력한 채팅 공백 제거
    const trimmedMessage = newMessage.trim();
    if (trimmedMessage) {
      // Add new message in Firestore
      await addDoc(chatRef, {
        text: trimmedMessage,
        createdAt: Date.now(),
        uid: adminUser.uid,
        displayName: adminUser.nickname,
        isRead: false,
      });

      // Clear input field
      setNewMessage('');
      // Scroll down to the bottom of the list
    }
  };

  const handleOnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleOnSubmit();
    }
  };
  useEffect(() => {
    chatSectionRef.current?.scrollIntoView({
      behavior: 'smooth',
    });
  }, [newMessages]);
  return (
    <ApplicantChatSectionWrapper>
      <>
        {chatSectionRef && newMessages && (
          <ApplicantChat
            ref={chatSectionRef}
            adminUser={adminUser.uid}
            newMessages={newMessages as IApplicantChatType[]}
          />
        )}
        <ApplicantChatBottomBar>
          <ApplicantChatInput
            onChange={newMessageHandler}
            value={newMessage}
            onKeyPress={handleOnKeyPress}
          />
          <ApplicantChatSendButton onClick={handleOnSubmit}>
            전송
          </ApplicantChatSendButton>
        </ApplicantChatBottomBar>
      </>
    </ApplicantChatSectionWrapper>
  );
};

export default ApplicantChatSection;
