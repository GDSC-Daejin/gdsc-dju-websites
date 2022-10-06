import styled from 'styled-components';

export const MinTitle = styled.div`
  width: 90px;
  font-size: ${({ theme }) => theme.fontSizes.textM};
  font-weight: 500;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.grey800};
`;
export const MinText = styled.div`
  color: ${({ theme }) => theme.colors.blue900};
  font-size: ${({ theme }) => theme.fontSizes.textM};
`;

export const ElementWrapper = styled.div`
  padding: 14px 0;
  display: flex;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors.grey200};
  @media (max-width: 500px) {
    width: 100%;
  }
`;
