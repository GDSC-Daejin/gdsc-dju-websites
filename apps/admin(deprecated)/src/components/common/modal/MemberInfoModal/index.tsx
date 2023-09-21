import React from 'react';

import { AnimatePresence } from 'framer-motion';

import { GDSCButton } from '@common/Button';
import {
  ButtonWrapper,
  ModalBackgroundWrapper,
  ModalInner,
  ModalContainer,
  ModalInnerNav,
  ModalInnerBody,
  ModalTitle,
  ModalInnerGridContainer,
  ModalInnerGridItem,
  ModalP,
} from '@common/modal/styled';
import { putMemberData } from '@src/apis/UserService';
import { useModalHandle } from '@src/hooks/useModalHandle';
import { IUserDataType } from '@type/userDataType';
import OutsideClickHandler from '@utils/OutsideClickHandler';
import { ClearButton } from '@common/ModalButton';
import MemberGrid from './MemberGrid';

type Props = {
  selectMember: IUserDataType | null;
};
const MemberInfoModal = (selectMember: Props) => {
  const { modal, closeModal } = useModalHandle('MEMBER');

  /** Core로 할당 */
  const GiveAdmin = async () => {
    if (selectMember.selectMember) {
      await putMemberData({
        userId: selectMember.selectMember?.userId,
        role: 'CORE',
      });
      window.location.reload();
    }
  };
  /** Member로 할당 */
  const GiveMember = async () => {
    if (selectMember.selectMember) {
      await putMemberData({
        userId: selectMember.selectMember?.userId,
        role: 'MEMBER',
      });
      window.location.reload();
    }
  };
  /** Guest로 할당 */
  const GiveGuest = async () => {
    if (selectMember.selectMember) {
      await putMemberData({
        userId: selectMember.selectMember?.userId,
        role: 'GUEST',
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
              <ModalInnerNav>
                <ModalTitle>멤버수정</ModalTitle>
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
              <ButtonWrapper>
                {selectMember.selectMember?.role !== 'CORE' && (
                  <GDSCButton
                    text={'Core'}
                    color={'blue900'}
                    onClick={GiveAdmin}
                  />
                )}
                {selectMember.selectMember?.role !== 'MEMBER' && (
                  <GDSCButton
                    text={'Member'}
                    color={'red600'}
                    onClick={GiveMember}
                  />
                )}
                {selectMember.selectMember?.role !== 'GUEST' && (
                  <GDSCButton
                    text={'GUEST'}
                    color={'red600'}
                    onClick={GiveGuest}
                  />
                )}
              </ButtonWrapper>
            </ModalInner>
          </OutsideClickHandler>
        </ModalBackgroundWrapper>
      )}
    </AnimatePresence>
  );
};

export default MemberInfoModal;
