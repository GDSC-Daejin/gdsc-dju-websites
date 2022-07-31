import styled, { css } from 'styled-components';
import { StyledBody } from '../styles/layouts';

export const EventLayoutWrapper = styled(StyledBody)`
  display: flex;
  flex-direction: column;
`;

export const EventsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const EventContour = styled.div<{ last: boolean }>`
  max-width: 1100px;
  height: 1px;
  width: 100%;
  margin: 40px 0;
  background: ${({ theme }) => theme.colors.grey100};
  ${({ last }) =>
    last &&
    css`
      background: transparent;
    `}
`;
export const EventSection = styled.section`
  margin-top: 50px;
`;
