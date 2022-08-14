import React, { memo } from 'react';
import { positionColor } from '../../../store/positionColor';
import { PositionCircle, StyledImage, StyledImageWrapper } from './styled';

type Props = { image: string; position: string | null };
const ProfileImage = ({ image, position }: Props) => {
  const imageUrl = image.replace('=s96-c', '');
  return (
    <StyledImageWrapper>
      {position && <PositionCircle color={positionColor(position)} />}
      <StyledImage src={imageUrl} />
    </StyledImageWrapper>
  );
};

export default memo(ProfileImage);
