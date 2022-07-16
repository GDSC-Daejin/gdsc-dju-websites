import styled, { css } from 'styled-components';

export const ApplicantChatSectionWrapper = styled.div`
  width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const ApplicantChatBottomBar = styled.div`
  position: absolute;
  bottom: 0;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
`;
export const ApplicantChatInput = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.grey300};
  border-radius: 7px;
  height: 36px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 10px;
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
  height: 700px;
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
