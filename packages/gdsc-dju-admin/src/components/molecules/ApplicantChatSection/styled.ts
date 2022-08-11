import styled, { css } from 'styled-components';

export const ApplicantChatSectionWrapper = styled.div`
  width: 100%;
  display: flex;
  height: calc(100vh - 40px);
  flex-direction: column;
  position: relative;
  border-left: 1px solid ${({ theme }) => theme.colors.grey200};
`;
export const ApplicantChatBottomBar = styled.div`
  bottom: 0;
  padding: 10px;
  width: 100%;
  height: fit-content;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
`;
export const ApplicantChatInput = styled.textarea`
  border: 1px solid ${({ theme }) => theme.colors.grey300};
  font-size: ${({ theme }) => theme.fontSize.body2};
  border-radius: 7px;
  height: fit-content;
  width: 100%;
  box-sizing: border-box;
  padding: 6px 10px;
  margin-right: 5px;
`;
export const ApplicantChatSendButton = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.blue500};
  border-radius: 7px;
  background: ${({ theme }) => theme.colors.blue500};
  padding: 3px 14px;
  cursor: pointer;
`;
export const ApplicantChatList = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  position: relative;
  padding: 10px;
  box-sizing: border-box;
`;
export const ChatCardWrapper = styled.div<{ isUser: boolean }>`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  ${({ isUser }) =>
    isUser &&
    css`
      justify-content: flex-end;
    `}
`;
