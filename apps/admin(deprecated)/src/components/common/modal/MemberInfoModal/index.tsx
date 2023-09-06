import React from 'react';

import { AnimatePresence } from 'framer-motion';

import { GDSCButton } from '@common/Button';
import {
  ButtonWrapper,
  ModalBackgroundWrapper,
  ModalInner,
} from '@common/modal/styled';
import { putMemberData } from '@src/apis/UserService';
import { useModalHandle } from '@src/hooks/useModalHandle';
import { IUserDataType } from '@type/userDataType';
import OutsideClickHandler from '@utils/OutsideClickHandler';

type Props = {
  selectMember: IUserDataType | null;
};
const MemberInfoModal = (selectMember: Props) => {
  const { modal, closeModal } = useModalHandle('MEMBER');

  const GiveAdmin = async () => {
    if (selectMember.selectMember) {
      await putMemberData({
        userId: selectMember.selectMember?.userId,
        role: 'CORE',
      });
      window.location.reload();
    }
  };
  const GiveMember = async () => {
    if (selectMember.selectMember) {
      await putMemberData({
        userId: selectMember.selectMember?.userId,
        role: 'MEMBER',
      });
      window.location.reload();
    }
  };

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
                <GDSCButton
                  text={'권한주기'}
                  color={'blue900'}
                  onClick={GiveAdmin}
                />
                <GDSCButton
                  text={'권한뺏기'}
                  color={'red900'}
                  onClick={GiveMember}
                />
                <GDSCButton
                  text={'뒤로가기'}
                  color={'grey400'}
                  onClick={closeModal}
                />
              </ButtonWrapper>
            </ModalInner>
          </OutsideClickHandler>
        </ModalBackgroundWrapper>
      )}
    </AnimatePresence>
  );
};

export default MemberInfoModal;
