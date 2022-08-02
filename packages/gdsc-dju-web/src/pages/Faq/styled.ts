import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const QuestionWrapper = styled(motion.a)<{ isOpen: boolean }>`
  cursor: pointer;
  padding: 24px 10px;
  display: flex;
  color: ${(props) => props.theme.colors.grey700};
  flex-direction: column;
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fontSize.h6};
  transition: all 0.3s ease;
  clip-path: inset(1% round 1%);
  ${({ isOpen }) =>
    isOpen &&
    css`
      color: ${({ theme }) => theme.colors.googleBlue};
    `}
  &:hover {
    clip-path: inset(0% round 1%);
  }
  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`;
export const QuestionInner = styled.div`
  font-size: ${({ theme }) => theme.fontSize.h6};
  display: flex;
  align-items: center;
  flex-direction: row;
  @media (max-width: 500px) {
    font-size: ${({ theme }) => theme.fontSize.body1};
  }
`;
export const AnswerWrapper = styled(motion.div)`
  box-sizing: border-box;
  padding: 20px 20px;
  padding-top: 0;
  color: ${({ theme }) => theme.colors.grey800};
`;
export const AnswerText = styled.div`
  font-size: ${({ theme }) => theme.fontSize.body1};
  @media (max-width: 500px) {
    font-size: ${({ theme }) => theme.fontSize.body2};
  }
`;
export const QuestionBr = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.grey200};
`;
export const QuestionMark = styled.div`
  height: 100%;
  font-size: ${({ theme }) => theme.fontSize.h6};
  ::before {
    display: flex;
    height: 100%;
    margin-right: 16px;
    margin-bottom: 2px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.grey700};
    content: 'Q';
  }
`;
