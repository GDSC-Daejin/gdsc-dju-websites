import styled, { css } from 'styled-components';

export const ChatCardInner = styled.div<{ isUser: boolean }>`
  padding: 10px 16px;
  width: fit-content;
  min-width: 100px;
  max-width: 230px;
  box-shadow: ${({ theme }) => theme.colors.boxShadow100};
  border: 1px solid ${({ theme }) => theme.colors.green600};
  margin-top: 10px;
  border-radius: 4px 16px 16px 16px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  row-gap: 4px;
  position: relative;
  ${({ isUser }) =>
    isUser &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.blue600};
      box-shadow: ${({ theme }) => theme.colors.boxShadow100};
      border-radius: 16px 16px 4px 16px;
    `}
`;
export const ChatUser = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.textM};
  color: ${({ theme }) => theme.colors.grey900};
  font-weight: bold;
`;

export const ChatText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.textM};
  color: ${({ theme }) => theme.colors.grey900};
  min-height: 18px;
`;
export const ChatDate = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.textS};
  color: ${({ theme }) => theme.colors.grey600};
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 4px;
  box-sizing: border-box;
`;
export const ChatCardWrapper = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
`;
