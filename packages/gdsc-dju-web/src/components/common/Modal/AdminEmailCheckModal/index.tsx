import React from 'react';
import { AnimatePresence, m } from 'framer-motion';
import { ModalBackgroundWrapper } from '../styled';
import OutsideClickHandler from '../../../../utils/OutsideClickHandler';
import { useRecoilState } from 'recoil';
import { MODAL_KEY, modalState } from '../../../../store/modal';
import { IApplicantTypeWithID } from '../../../../types/applicant';
import {
  ApplyButtonWrapper,
  ApplyModalInner,
  ApplyModalP,
  ApplyModalTitle,
} from '../ApplyModal/styled';
import { GDSCButton } from '../../Button';

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
  const [modal, setModal] = useRecoilState(modalState);
  return (
    <AnimatePresence>
      {modal.adminEmailCheck && (
        <ModalBackgroundWrapper
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <OutsideClickHandler
            outsideClick={() => {
              setModal({ ...modal, [MODAL_KEY.ADMIN_EMAIL_CHECK]: false });
            }}
          >
            <ApplyModalInner>
              <ApplyModalTitle>최종 전송 전, 확인해주세요.</ApplyModalTitle>
              <ApplyModalP>
                선택한 이메일은 총 {applicants.length}개에요.
              </ApplyModalP>
              <ApplyButtonWrapper>
                <GDSCButton
                  text={'돌아가기'}
                  color={'tossBlue'}
                  onClick={() =>
                    setModal({ ...modal, [MODAL_KEY.ADMIN_EMAIL_CHECK]: false })
                  }
                />
                <GDSCButton
                  text={'전송하기'}
                  color={'tossRed'}
                  onClick={() => sendEmail(template, applicants)}
                />
              </ApplyButtonWrapper>
            </ApplyModalInner>
          </OutsideClickHandler>
        </ModalBackgroundWrapper>
      )}
    </AnimatePresence>
  );
};

export default AdminEmailCheckModal;
