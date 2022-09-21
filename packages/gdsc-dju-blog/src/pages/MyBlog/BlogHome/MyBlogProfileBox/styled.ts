import styled, { css } from 'styled-components';

export const ProfileWrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: 86px;
`;
export const ProfileImageWrapper = styled.div`
  margin-right: 90px;
`;
export const ProfileDetailWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;
export const Role = styled.p`
  color: ${({ theme }) => theme.colors.grey500};
  font-size: ${({ theme }) => theme.fontSizes.textXl};
  font-family: 'Google Sans', sans-serif;
  text-transform: capitalize;
`;
export const BlogNameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  margin-bottom: 3px;
`;
export const BlogName = styled.h2`
  margin-right: 10px;
  font-size: ${({ theme }) => theme.fontSizes.titleXl};
  color: ${({ theme }) => theme.colors.grey900};
  font-weight: bold;
  font-family: 'Google Sans', sans-serif;
  line-height: 1.2;
`;
export const BlogNamePosition = styled.p<{ color: string }>`
  font-size: ${({ theme }) => theme.fontSizes.titleS};
  font-family: 'Google Sans', sans-serif;
  position: relative;
  bottom: -7px;

  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
`;
export const SettingIconWrapper = styled.div`
  margin-left: 43px;
  display: flex;
  flex-direction: column-reverse;
  height: 36px;
  cursor: pointer;
`;
export const IntroduceText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.textXl};
  color: ${({ theme }) => theme.colors.grey900};
  max-width: 555px;
`;

export const ButtonWrapper = styled.div`
  width: 216px;
  display: flex;
  height: min-content;
  flex-direction: row;
  justify-content: space-between;
`;
