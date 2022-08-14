import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SideBarWrapper = styled(motion.div)`
  display: flex;
  position: fixed;
  z-index: 1009;
  left: 0;
  top: 0;
  width: 400px;
  height: 100%;
  @media screen and (max-width: 500px) {
    width: 100vw;
    height: 100vh;
  }
`;
export const SideBarInner = styled(motion.aside)`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;

  @media screen and (max-width: 500px) {
    align-items: center;
    padding-top: 0;
  }
`;

export const GrayBox = styled(motion.div)`
  display: flex;
  position: fixed;
  background: #191f28;
  backdrop-filter: ${({ theme }) => theme.colors.blurBackground};
  right: 0;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
`;
export const SideBarDesign = styled.div`
  display: flex;
  flex-direction: column;
  white-space: nowrap;
`;
export const ProfileImageWrapper = styled.div`
  display: flex;
  margin-top: 60px;
  margin-left: 20px;
  margin-bottom: 24px;
  @media screen and (max-width: 500px) {
    margin-left: 0;
    margin-bottom: 14px;
  }
`;
export const ProfileInformation = styled.div`
  display: flex;
  align-items: end;
  margin-bottom: 20px;
  @media screen and (max-width: 500px) {
    margin-bottom: 12px;
  }
`;
export const ProfileName = styled.div`
  display: flex;
  padding-right: 10px;
  font-size: ${({ theme }) => theme.fontSize.h4};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.grey900};
  @media screen and (max-width: 500px) {
    font-size: ${({ theme }) => theme.fontSize.h5};
  }
`;
export const ProfileJobPosition = styled.div`
  display: flex;
  padding-right: 10px;
  padding-bottom: 5px;
  font-size: ${({ theme }) => theme.fontSize.body1};
  color: ${({ theme }) => theme.colors.grey600};
  @media screen and (max-width: 500px) {
    font-size: ${({ theme }) => theme.fontSize.body3};
  }
`;
export const SettingIconWrapper = styled.div`
  display: flex;
  margin-bottom: 7px;
  cursor: pointer;
  & svg {
    @media screen and (max-width: 500px) {
      width: 12px;
      height: 12px;
    }
  }
`;
export const MyBlogButtonWrapper = styled.div`
  display: flex;
  margin-bottom: 12px;
`;
export const BottomButtonWrapper = styled.div`
  display: flex;
  margin-bottom: 40px;
`;
export const WriteButtonWrapper = styled.div`
  display: flex;
  margin-right: 16px;
`;
export const LogoutButtonWrapper = styled.div`
  display: flex;
`;
export const GdscSideBlogLogoWrapper = styled.div`
  display: flex;
  margin-bottom: 8px;
  padding-top: 227px;
`;
export const GoogleLogoWrapper = styled.div`
  display: flex;
  position: absolute;
  left: 28px;
  top: 8px;
  & div {
    border-radius: 5px;
    width: 34px;
    height: 32px;
    top: 1px;
    left: 10px;
  }
`;
export const GoogleButtonWrapper = styled.div`
  display: flex;
  position: relative;
  padding-bottom: 60px;
  @media screen and (max-width: 500px) {
    padding-bottom: 22px;
  }
  & button {
    padding: 5px 25px 8px 50px;
  }
`;
