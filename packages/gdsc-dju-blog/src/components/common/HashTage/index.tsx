import React from 'react';
import { HashTageWrapper } from './styled';

interface HashTageProps {
  text: string;
  size?: 'L' | 'S';
}

const HashTageLight: React.FC<HashTageProps> = ({ text, size }) => {
  return (
    <HashTageWrapper light={true} size={size}>
      #{text}
    </HashTageWrapper>
  );
};
const HashTageDark: React.FC<HashTageProps> = ({ text, size }) => {
  return (
    <HashTageWrapper light={false} size={size}>
      #{text}
    </HashTageWrapper>
  );
};

export { HashTageLight, HashTageDark };
