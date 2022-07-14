import styled, { css } from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  max-width: 1064px;
  margin: auto;
  padding: 0 67px;
  box-sizing: border-box;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const FooterText = styled.a<{ google?: boolean }>`
  font-size: ${(props) => props.theme.fontSize.body2};
  font-weight: 600;
  margin-right: 20px;
  color: ${(props) => props.theme.colors.grey600};
  cursor: pointer;
  white-space: nowrap;
  @media (max-width: ${(props) => props.theme.windowSize.tablet}px) {
    margin-top: 10px;
  }
  ${(props) =>
    props.google &&
    css`
      font-size: ${(props) => props.theme.fontSize.h7};
      font-weight: 700;
      color: ${(props) => props.theme.colors.grey700};
    `}
`;

export const FooterCopyRight = styled.span`
  display: inline-block;
  position: relative;
  font-size: ${(props) => props.theme.fontSize.body3};
  color: ${(props) => props.theme.colors.grey600};
  white-space: nowrap;
  @media (max-width: ${(props) => props.theme.windowSize.mobile}px) {
    font-size: ${(props) => props.theme.fontSize.body4};
  }
`;
export const FooterWrapper = styled.div<{ disable: boolean }>`
  ${({ disable }) =>
    disable &&
    css`
      display: none;
    `}
  display: flex;
  bottom: 0;
  padding: 30px 40px;
  justify-content: space-between;
  width: 100vw;
  box-sizing: border-box;
  align-items: flex-end;
  background-color: rgba(0, 0, 0, 0.01);
  backdrop-filter: blur(10px);
  @media (max-width: ${(props) => props.theme.windowSize.mobile}px) {
    padding: 30px 20px;
  }
`;
export const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex: 1;
  @media (max-width: ${(props) => props.theme.windowSize.tablet}px) {
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;
export const FooterLogoWrapper = styled.div`
  margin-right: 20px;
`;
export const FooterGDSCLogo = styled.img`
  height: 30px;

  padding-right: 5px;
  @media (max-width: 500px) {
    height: 30px;
  }
`;
