import { AnimatePresence } from 'framer-motion';
import { useAtom } from 'jotai';
import React from 'react';
import { modalAtom } from '../../../../atoms/modalAtom';
import { IApplicantTypeWithID } from '../../../../types/applicant';
import OutsideClickHandler from '../../../../utils/OutsideClickHandler';

import { GDSCButton } from '../../Button';

import {
  ButtonWrapper,
  ModalBackgroundWrapper,
  ModalInner,
  ModalP,
  ModalTitle,
} from '../styled';

interface IAdminEmailCheckModalProps {
  sendEmail: (template: string, applicants: IApplicantTypeWithID[]) => void;
  template: string;
  applicants: IApplicantTypeWithID[];
}

const AdminEmailCheckModal: React.FC<IAdminEmailCheckModalProps> = ({
  sendEmail,
  template,
  applicants,
}) => {
  const [modal, setModal] = useAtom(modalAtom);
  return (
    <AnimatePresence>
      {modal.ADMIN_EMAIL && (
        <ModalBackgroundWrapper
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <OutsideClickHandler
            outsideClick={() => {
              setModal({ ...modal, ADMIN_EMAIL: false });
            }}
          >
            <ModalInner>
              <ModalTitle>최종 전송 전, 확인해주세요.</ModalTitle>
              <ModalP>선택한 이메일은 총 {applicants.length}개에요.</ModalP>
              <ButtonWrapper>
                <GDSCButton
                  text={'돌아가기'}
                  color={'tossBlue'}
                  onClick={() => setModal({ ...modal, ADMIN_EMAIL: false })}
                />
                <GDSCButton
                  text={'전송하기'}
                  color={'tossRed'}
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
