import React from 'react';

import { AnimatePresence } from 'framer-motion';

import { GDSCButton } from '@common/Button';
import {
  ButtonWrapper,
  ModalBackgroundWrapper,
  ModalInner,
} from '@common/modal/styled';
import { useModalHandle } from '@src/hooks/useModalHandle';
import OutsideClickHandler from '@utils/OutsideClickHandler';

const MemberInfoModal = () => {
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
              <ButtonWrapper>
                <GDSCButton text={'저장하기'} color={'blue900'} />
                <GDSCButton text={'뒤로가기'} color={'grey400'} />
              </ButtonWrapper>
            </ModalInner>
          </OutsideClickHandler>
        </ModalBackgroundWrapper>
      )}
    </AnimatePresence>
  );
};

export default MemberInfoModal;
