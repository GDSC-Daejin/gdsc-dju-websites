import styled from 'styled-components';

export const EventDescription = styled.p`
  margin-top: 10px;
  font-size: ${({ theme }) => theme.fontSize.body1};
  color: ${({ theme }) => theme.colors.grey600};
`;
export const EventDateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  align-items: center;
`;
export const StyledSectionBar = styled.div`
  background: ${({ theme }) => theme.colors.grey400};
  height: 14px;
  width: 2px;
  margin: 0 10px;
`;
export const EventDate = styled.span`
  font-size: ${({ theme }) => theme.fontSize.body1};
  color: ${({ theme }) => theme.colors.googleGreen};
`;
export const EventTime = styled.span`
  font-size: ${({ theme }) => theme.fontSize.body1};
  color: ${({ theme }) => theme.colors.grey600};
`;
export const EventInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const EventButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
`;
