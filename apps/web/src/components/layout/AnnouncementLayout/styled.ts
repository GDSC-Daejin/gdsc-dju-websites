import styled from 'styled-components';

export const SectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 320px) {
    flex-direction: column;
  }
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
export const IntroduceWrapper = styled.article`
  margin-right: 20px;
  box-sizing: inherit;
  @media (max-width: ${({ theme }) => theme.windowSizes.mobile}px) {
    max-width: 320px;
  }
  @media (max-width: ${({ theme }) => theme.windowSizes.tablet}px) {
    max-width: 550px;
  }
`;
export const JoinWrapper = styled.div`
  width: 337px;
  min-width: 250px;

  display: none;
  @media (min-width: 500px) {
    display: block;
  }
`;
export const JoinInner = styled.div`
  display: flex;
  position: sticky;
  width: 100%;
  top: 100px;
  flex-direction: column;

  @media (max-width: 500px) {
    position: initial;
  }
  @media (max-width: 320px) {
    position: initial;
  }
`;

export const MobileTopElementWrapper = styled.div`
  display: none;
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;

    bottom: 10px;
  }
`;
export const MobileBottomElementWrapper = styled.div`
  display: none;
  background: ${({ theme }) => theme.colors.background};
  padding: 5px 0;
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    position: sticky;
    bottom: 0;
  }
`;
