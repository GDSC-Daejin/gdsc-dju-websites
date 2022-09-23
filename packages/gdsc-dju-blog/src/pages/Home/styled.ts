import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const HomeContentWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;
  gap: 3.75rem;
  overflow: hidden;
  height: 100%;
  max-width: 1140px;
  padding: 0 20px;
`;
export const HomeLayoutContainer = styled.div`
  position: relative;
  z-index: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 1140px;
  margin: 0 auto;
  min-width: 320px;
  flex: 1 1 auto;
  @media (max-width: ${({ theme }) => theme.windowSizes.mobile}px) {
    width: 100%;
  }
  overflow: hidden;
`;
export const HomePhraseWrapper = styled(motion.div)`
  height: 180px;
  margin-top: 120px;
  margin-bottom: 30px;
`;
export const CardSectionWrapper = styled.div`
  height: 400px;

  .CardSection_Circle {
    background-color: white;
    width: 50px;
    height: 50px;
    box-sizing: border-box;
    box-shadow: 0px 2px 12px rgba(25, 31, 40, 0.08);
    border: 1px solid #ebebeb;
    border-radius: 50%;
  }
`;

export const CardSection = styled(motion.section)<{ isDrag: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  cursor: ${(props) => (props.isDrag ? 'grabbing' : 'grab')};
  div:last-child {
    margin-right: 0;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const BlogCardWrapper = styled(motion.div)<{
  homeWidth?: string;
  windowWidth?: string;
}>`
  width: 248px;
  height: 294px;
  margin: 0 15px;

  ${({ windowWidth, homeWidth }) =>
    homeWidth &&
    windowWidth &&
    css`
      transform: translateX(calc((${windowWidth} - ${homeWidth}) / 2 + 20px));
    `}

  :first-child {
    margin-left: 0;
  }
  :last-child {
    margin-right: 0;
  }
  &.viewmore-item {
    min-width: 248px;
    height: 294px;
    display: flex;
    justify-content: center;
    align-items: center;
    .viewmore-item__button {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: #ffffff;
      box-shadow: 0px 2px 12px rgba(25, 31, 40, 0.08);
      border: 1px solid #ebebeb;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }
`;

export const ButtonWrapper = styled.div`
  position: relative;
  margin-bottom: 230px;
  display: flex;
  gap: 16px;
  left: 20px;
  bottom: 0px;
  margin-top: 3px;
`;
