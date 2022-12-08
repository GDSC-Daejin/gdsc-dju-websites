import React, { useCallback, useEffect, useRef } from 'react';

import { addDoc, collection, limit, orderBy, query } from 'firebase/firestore';
import { useAtom } from 'jotai';

import { db } from '../../../firebase/firebase';
import { useFirestoreQuery } from '../../../hooks/useFirebaseQuery';
import { userAtom } from '../../../store/userAtom';
import { IApplicantChatType } from '../../../types/applicant';

import ApplicantChatCardSection from './ApplicantChatCardSection';
import {
  ApplicantChatBottomBar,
  ApplicantChatContainerWrapper,
  ApplicantChatInput,
  ApplicantChatSendButton,
} from './styled';

interface IApplicantChatSectionProps {
  applicantId: string;
}

const ApplicantChatContainer: React.FC<IApplicantChatSectionProps> = ({
  applicantId,
}) => {
  const [adminUser] = useAtom(userAtom);

  const q = query(
    collection(db, `chats-${applicantId}`),
    orderBy('createdAt', 'desc'),
    limit(100),
  );
  const chatSectionRef = useRef<HTMLDivElement>(null);
  const chatRef = collection(db, `chats-${applicantId}`);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const newMessages = useFirestoreQuery(q);

  const handleResizeHeight = useCallback(() => {
    if (textAreaRef === null || textAreaRef.current === null) {
      return;
    }
    textAreaRef.current.style.height = '40px';
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px';
  }, []);

  const handleOnSubmit = async () => {
    if (textAreaRef === null || textAreaRef.current === null) {
      return;
    }
    const message = textAreaRef.current.value;
    textAreaRef.current.value = '';
    handleResizeHeight();
    if (message) {
      // Add new message in Firestore
      await addDoc(chatRef, {
        text: message,
        createdAt: Date.now(),
        uid: adminUser.uid,
        displayName: adminUser.nickname,
        isRead: false,
      });
    }
  };

  const handleOnKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const keyCode = e.which || e.keyCode;
    if (keyCode === 13 && !e.shiftKey) {
      // Don't generate a new line
      e.preventDefault();
      handleOnSubmit();
      // Do something else such as send the message to back-end ...
    }
  };

  useEffect(() => {
    chatSectionRef.current?.scrollIntoView();
  }, [newMessages]);

  return (
    <ApplicantChatContainerWrapper>
      <>
        {chatSectionRef && newMessages && adminUser.uid && (
          <ApplicantChatCardSection
            ref={chatSectionRef}
            adminUser={adminUser.uid}
            newMessages={newMessages as IApplicantChatType[]}
          />
        )}
      </>
      <ApplicantChatBottomBar>
        <ApplicantChatInput
          onKeyPress={handleOnKeyPress}
          onInput={handleResizeHeight}
          placeholder={'메모를 입력하세요.'}
          ref={textAreaRef}
        />
        <ApplicantChatSendButton onClick={handleOnSubmit}>
          전송
        </ApplicantChatSendButton>
      </ApplicantChatBottomBar>
    </ApplicantChatContainerWrapper>
  );
};

export default ApplicantChatContainer;
