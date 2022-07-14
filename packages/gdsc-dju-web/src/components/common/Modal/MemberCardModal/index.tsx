import React from 'react';
import {
  MemberImg,
  Name,
  Nickname,
  Role,
  Skeleton,
} from '../../MemberCardV1/styled';
import { MemberCardModalInner, ModalWrapper, StyledModal } from './styled';
import { memberDataType } from '../../../../types/member';
import OutsideClickHandler from '../../../../utils/OutsideClickHandler';

interface IMemberCardModal extends memberDataType {
  setSelectedId: (num: number | undefined) => void;
  id: number;
}

const MemberCardModal: React.FC<IMemberCardModal> = ({
  name,
  nickname,
  role,
  image,
  text,
  setSelectedId,
  id,
}) => {
  return (
    <ModalWrapper>
      <OutsideClickHandler outsideClick={() => setSelectedId(undefined)}>
        <StyledModal layoutId={String(id)}>
          <MemberCardModalInner>
            {image ? (
              <MemberImg
                src={image}
                layoutId={`memberImage-section-${String(id)}`}
              />
            ) : (
              <Skeleton layoutId={`memberImage-section-${String(id)}`} />
            )}
            <Nickname layoutId={`nickname-section-${String(id)}`}>
              {nickname}
            </Nickname>
            <Name layoutId={`name-section-${String(id)}`}>{name}</Name>
            <Role layoutId={`role-section-${String(id)}`}>{role}</Role>
            <Name>{text}</Name>
          </MemberCardModalInner>
        </StyledModal>
      </OutsideClickHandler>
    </ModalWrapper>
  );
};

export default MemberCardModal;
