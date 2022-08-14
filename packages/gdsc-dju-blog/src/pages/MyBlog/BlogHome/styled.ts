import styled, { css } from 'styled-components';
import { lightColors } from '../../../styles/lightColors';

export const ProfileWrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 180px;
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
  font-size: ${({ theme }) => theme.fontSize.body1};
  font-family: 'Google Sans', sans-serif;
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
  font-size: ${({ theme }) => theme.fontSize.h2};
  color: ${({ theme }) => theme.colors.grey900};
  font-weight: bold;
  font-family: 'Google Sans', sans-serif;
  line-height: 1.2;
`;
export const BlogNamePosition = styled.p<{ color: string }>`
  font-size: ${({ theme }) => theme.fontSize.h5};

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
  font-size: ${({ theme }) => theme.fontSize.body1};
  color: ${({ theme }) => theme.colors.grey900};
  max-width: 555px;
`;

export const TopMenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 59px;
`;
export const ButtonWrapper = styled.div`
  width: 216px;
  display: flex;
  height: min-content;
  flex-direction: row;
  justify-content: space-between;
`;
export const PostSectionWrapper = styled.section<{ isNull: boolean }>`
  margin-bottom: 110px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  min-height: 600px;
  ${({ isNull }) =>
    isNull &&
    css`
      justify-content: center;
    `}
`;
export const Notice = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.h7};
  color: ${({ theme }) => theme.colors.grey400};
`;
export const PostCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
`;
export const PageBarSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 215px;
`;
