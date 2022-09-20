import styled from 'styled-components';

export const OnBoardContentTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.h3};
  color: ${({ theme }) => theme.colors.grey900};
  font-weight: 500;
  margin-bottom: 62px;
`;
export const OnBoardContentSubTitle = styled.span`
  font-size: ${({ theme }) => theme.fontSize.h6};
  color: ${({ theme }) => theme.colors.blue600};
  font-weight: 500;
  margin-bottom: 14px;
`;
export const OnBoardContentWrapper = styled.span`
  display: flex;
  flex-direction: column;
  position: relative;
`;
