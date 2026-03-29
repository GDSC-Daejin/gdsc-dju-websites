import React from 'react';

import { AnimatePresence } from 'framer-motion';

import {
  ModalBackgroundWrapper,
  ModalInner,
  ModalInnerNav,
  ModalInnerBody,
  ModalTitle,
  ModalInnerGridContainer,
  ModalInnerGridItem,
  ModalP,
} from '@common/modal/styled';
import { useModalHandle } from '@src/hooks/useModalHandle';
import { IUserDataType } from '@type/userDataType';
import OutsideClickHandler from '@utils/OutsideClickHandler';
import { ClearButton } from '@common/ModalButton';

type Props = {
  selectMember: IUserDataType | null;
};
const MemberInfoModal = (selectMember: Props) => {
  const { modal, closeModal } = useModalHandle('MEMBER');

  return (
    <AnimatePresence>
      {modal.isOpen && (
        <ModalBackgroundWrapper
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <OutsideClickHandler
            outsideClick={() => {
              closeModal();
            }}
          >
            <ModalInner>
              <ModalInnerNav>
                <ModalTitle>멤버 정보</ModalTitle>
                <ClearButton onClick={closeModal} />
              </ModalInnerNav>
              <ModalInnerBody>
                <ModalInnerGridContainer>
                  <ModalInnerGridItem>
                    <ModalP>Name</ModalP>
                  </ModalInnerGridItem>
                  <ModalInnerGridItem>
                    <ModalP>{selectMember.selectMember?.username}</ModalP>
                  </ModalInnerGridItem>
                  <ModalInnerGridItem>
                    <ModalP>E-mail</ModalP>
                  </ModalInnerGridItem>
                  <ModalInnerGridItem>
                    <ModalP>{selectMember.selectMember?.email}</ModalP>
                  </ModalInnerGridItem>

                  <ModalInnerGridItem>
                    <ModalP>Permission</ModalP>
                  </ModalInnerGridItem>
                  <ModalInnerGridItem>
                    <ModalP> {selectMember.selectMember?.role}</ModalP>
                  </ModalInnerGridItem>
                  {selectMember.selectMember?.memberInfo.positionType && (
                    <>
                      <ModalInnerGridItem>
                        <ModalP>Position</ModalP>
                      </ModalInnerGridItem>
                      <ModalInnerGridItem>
                        <ModalP>
                          {' '}
                          {selectMember.selectMember?.memberInfo.positionType}
                        </ModalP>
                      </ModalInnerGridItem>
                    </>
                  )}
                </ModalInnerGridContainer>
              </ModalInnerBody>
            </ModalInner>
          </OutsideClickHandler>
        </ModalBackgroundWrapper>
      )}
    </AnimatePresence>
  );
};

export default MemberInfoModal;
