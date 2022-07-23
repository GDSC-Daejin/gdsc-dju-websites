import { motion } from 'framer-motion';
import styled from 'styled-components';

export const AdminSignUpWrapper = styled(motion.div)`
  margin: 0 auto;
  background: #fff;
  border-radius: 10px;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.1);
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 8px;
`;
export const ApplyModalWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;
