import styled, { css } from 'styled-components';

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
