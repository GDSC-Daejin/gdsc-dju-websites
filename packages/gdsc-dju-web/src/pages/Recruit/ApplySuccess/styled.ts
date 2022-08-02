import styled from 'styled-components';

export const ApplyTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.h2};
  color: ${({ theme }) => theme.colors.grey800};
  font-weight: 500;
  @media (max-width: ${({ theme }) => theme.windowSize.mobile}px) {
    font-size: ${({ theme }) => theme.fontSize.h3};
  }
  margin-bottom: 10px;
`;
export const ApplyMargin = styled.div`
  height: 60px;
`;
export const ApplyLink = styled.a`
  font-size: ${({ theme }) => theme.fontSize.body1};
  color: ${({ theme }) => theme.colors.blue600};
  font-weight: 400;
  text-decoration: underline;
  transition: color 0.3s ease-in-out;
  @media (max-width: ${({ theme }) => theme.windowSize.mobile}px) {
    font-size: ${({ theme }) => theme.fontSize.body2};
  }
  &:hover {
    color: ${({ theme }) => theme.colors.blue900};
    text-decoration: underline;
  }
`;
export const ApplyLinkWrapper = styled.div`
  font-size: ${({ theme }) => theme.fontSize.body1};
  color: ${({ theme }) => theme.colors.grey900};
  align-items: center;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 6px;
  @media (max-width: ${({ theme }) => theme.windowSize.mobile}px) {
    font-size: ${({ theme }) => theme.fontSize.body2};
  }
`;
