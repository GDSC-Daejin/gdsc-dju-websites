import styled, { css } from 'styled-components';

export const ChatCardInner = styled.div<{ isUser: boolean }>`
  padding: 10px;
  width: fit-content;
  min-width: 100px;
  max-width: 200px;
  box-shadow: 0 2px 3px ${({ theme }) => theme.colors.grey300};
  margin-top: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  row-gap: 4px;
  position: relative;
  ${({ isUser }) =>
    isUser &&
    css`
      background: ${({ theme }) => theme.colors.blue300};
      box-shadow: ${({ theme }) => theme.colors.boxShadow100};
    `}
`;
export const ChatUser = styled.p`
  font-size: ${({ theme }) => theme.fontSize.body3};
  color: ${({ theme }) => theme.colors.grey900};
  font-weight: bold;
`;
export const ChatText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.body2};
  color: ${({ theme }) => theme.colors.grey900};
`;
export const ChatDate = styled.p`
  font-size: ${({ theme }) => theme.fontSize.body3};
  color: ${({ theme }) => theme.colors.grey600};
`;
