import styled, { css } from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  max-width: 1064px;
  margin: auto;
  padding: 0 67px;
  box-sizing: border-box;
`;

export const FooterText = styled.a<{ google?: boolean }>`
  font-size: ${(props) => props.theme.fontSize.body2};
  font-weight: 600;
  color: ${(props) => props.theme.colors.grey600};
  cursor: pointer;
  white-space: nowrap;
  margin: 0;
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
  position: absolute;
  font-size: ${(props) => props.theme.fontSize.body3};
  color: ${(props) => props.theme.colors.grey600};
  white-space: nowrap;
  bottom: 20px;
  right: 20px;
  @media (max-width: ${(props) => props.theme.windowSize.mobile}px) {
    font-size: ${(props) => props.theme.fontSize.body4};
  }
`;
export const FooterWrapper = styled.footer<{ disable: boolean }>`
  ${({ disable }) =>
    disable &&
    css`
      display: none;
    `}
  display: flex;
  padding: 30px 40px;
  justify-content: space-between;
  width: 100vw;
  box-sizing: border-box;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.01);
  backdrop-filter: blur(10px);
  @media (max-width: ${({ theme }) => theme.windowSize.tablet}px) {
    padding: 30px 20px;
    align-items: center;
  }
`;
export const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  height: min-content;
  @media (max-width: ${(props) => props.theme.windowSize.tablet}px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;
