import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledMemberCard = styled(motion.div)`
  margin-bottom: 20px;
  width: 200px;
`;
export const Nickname = styled(motion.div)`
  font-size: 2rem;
  margin-top: 22px;
`;
export const Skeleton = styled(motion.div)`
  height: 200px;
  width: 200px;
  background: ${(props) => props.theme.colors.grey50};
`;
export const Name = styled(motion.p)`
  font-size: 1.3rem;
  margin-top: 2px;
  color: ${(props) => props.theme.colors.grey600};
`;
export const Role = styled(motion.span)`
  color: ${(props) => props.theme.colors.googleBlue};
  font-size: 1.3rem;
  margin-top: 2px;
`;
export const MemberImg = styled(motion.img)`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  border: 1px solid ${(props) => props.theme.colors.grey500};
  box-sizing: border-box;
`;
