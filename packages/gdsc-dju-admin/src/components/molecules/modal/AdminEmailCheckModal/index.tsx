import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { useModalHandle } from '../../../../hooks/useModalHandle';
import { IApplicantTypeWithID } from '../../../../types/applicant';
import OutsideClickHandler from '../../../../utils/OutsideClickHandler';

import { GDSCButton } from '../../../atoms/Button';

import {
  ButtonWrapper,
  ModalBackgroundWrapper,
  ModalInner,
  ModalP,
  ModalTitle,
} from '../styled';

interface Props {
  sendEmail: (
    template: string | null,
    applicants: IApplicantTypeWithID[],
  ) => void;
  template: string | null;
  applicants: IApplicantTypeWithID[];
}

const AdminEmailCheckModal: React.FC<Props> = ({
  sendEmail,
  template,
  applicants,
}) => {
  const { modal, closeModal } = useModalHandle('EMAIL');
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
              <ModalTitle>최종 전송 전, 확인해주세요.</ModalTitle>
              <ModalP>선택한 이메일은 총 {applicants.length}개에요.</ModalP>
              <ModalP>선택한 템플릿은 {template}에요.</ModalP>
              <ButtonWrapper>
                <GDSCButton
                  text={'돌아가기'}
                  color={'blue900'}
                  onClick={() => closeModal()}
                />
                <GDSCButton
                  text={'전송하기'}
                  color={'red900'}
                  onClick={() => sendEmail(template, applicants)}
                />
              </ButtonWrapper>
            </ModalInner>
          </OutsideClickHandler>
        </ModalBackgroundWrapper>
      )}
    </AnimatePresence>
  );
};

export default AdminEmailCheckModal;