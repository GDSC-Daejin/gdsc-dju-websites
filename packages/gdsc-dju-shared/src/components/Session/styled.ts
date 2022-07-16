import styled, { css } from 'styled-components';

export const EventSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const EventTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.h4};
  color: ${({ theme }) => theme.colors.grey900};
  @media (max-width: ${(props) => props.theme.windowSize.mobile}px) {
    font-size: ${(props) => props.theme.fontSize.h5};
  }
`;
export const EventDescription = styled.div`
  margin-top: 10px;
  font-size: ${({ theme }) => theme.fontSize.body1};
  color: ${({ theme }) => theme.colors.grey600};
  @media (max-width: ${(props) => props.theme.windowSize.mobile}px) {
    font-size: ${(props) => props.theme.fontSize.body2};
    margin-top: 6px;
  }
`;
export const EventDateWrapper = styled.span`
  margin-top: 14px;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: ${(props) => props.theme.windowSize.mobile}px) {
    margin-top: 6px;
  }
`;
export const EventDate = styled.span<{ type: 'event' | 'session' }>`
  font-size: ${({ theme }) => theme.fontSize.body1};

  ${({ type }) =>
    type == 'event'
      ? css`
          color: ${({ theme }) => theme.colors.googleGreen};
        `
      : css`
          color: ${({ theme }) => theme.colors.googleBlue};
        `}
`;
export const EventTime = styled.div`
  font-size: ${({ theme }) => theme.fontSize.body1};
  color: ${({ theme }) => theme.colors.grey600};
`;
export const SessionHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  @media (max-width: ${(props) => props.theme.windowSize.mobile}px) {
    flex-direction: column;
  }
`;
export const EventInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const EventApplyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
  @media (max-width: ${(props) => props.theme.windowSize.mobile}px) {
    flex-direction: row;
    margin-top: 10px;
  }
`;

export const SessionCardSection = styled.section`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  overflow-x: scroll;
  cursor: grab;
  -ms-overflow-style: none;
  scrollbar-width: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const SessionCardWrapper = styled.div<{ sectionWidth: string }>`
  margin: 0 10px;

  ${({ sectionWidth }) =>
    sectionWidth &&
    css`
      transform: translateX(calc((100vw - ${sectionWidth}) / 2 + 20px));
      &:last-child {
        padding-right: calc((100vw - ${sectionWidth}) / 2 + 20px);
      }
    `}
  &:first-child {
    margin-left: 0;
  }
`;
