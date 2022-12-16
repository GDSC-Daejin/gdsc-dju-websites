import styled from 'styled-components';

export const ApplicantChatContainerWrapper = styled.div`
  width: 100%;
  display: flex;
  height: calc(100vh - 50px);
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
  flex-wrap: wrap;
  gap: 10px;
  flex-direction: column;
`;
export const ApplicantChatInput = styled.textarea`
  position: relative;
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.grey300};
  font-size: ${({ theme }) => theme.fontSizes.textM};
  border-radius: 7px;
  height: 40px;
  resize: none;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  margin-right: 5px;
  &:focus {
    outline: none;
  }
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.blue600};
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.grey600};
  }
`;
export const ApplicantChatSendButton = styled.button`
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.blue600};
  font-size: ${({ theme }) => theme.fontSizes.textM};
  color: #fff;
  border-radius: 7px;
  background: ${({ theme }) => theme.colors.blue500};
  padding: 7px;
  width: 100%;
  cursor: pointer;
`;
