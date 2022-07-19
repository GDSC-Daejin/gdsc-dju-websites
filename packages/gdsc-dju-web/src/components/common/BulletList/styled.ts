import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledLi = styled(motion.li)`
  position: relative;
  padding-left: 24px;
  margin: 8px 0;
  font-size: 1.6rem;
  line-height: 24px;
  list-style: none;
  color: ${({ theme }) => theme.colors.grey700};
  &:before {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    width: 16px;
    height: 16px;
    font-size: 1.6rem;
    font-weight: bold;
    line-height: 23px;
    color: ${(props) => props.theme.colors.tossBlue};
    text-align: center;
    content: '•';
  }
  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`;
