import React from 'react';

import { AnimatePresence } from 'framer-motion';
import { useAtom } from 'jotai';

import { modalVariants } from '@animations/modalVariants';
import { GDSCButton } from '@atoms/Button';
import { MODAL_KEY, modalAtom } from '@store/modalAtom';
import OutsideClickHandler from '@utils/OutsideClickHandler';

import {
  ApplyButtonWrapper,
  ApplyModalButtonWrapper,
  ApplyModalContentWrapper,
  ApplyModalInner,
  ApplyModalInnerWrapper,
  ApplyModalP,
  ApplyModalTitle,
  ApplyModalWrapper,
} from './styled';

interface Props {
  name: string;
  position: string;
  email: string;
  phoneNumber: string;
  onClick: () => void;
}

const ApplyModal: React.FC<Props> = ({
  name,
  position,
  email,
  phoneNumber,
  onClick,
}) => {
  const [modal, setModal] = useAtom(modalAtom);
  return (
    <AnimatePresence>
      {modal.applyCheck && (
        <ApplyModalWrapper
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <OutsideClickHandler
            outsideClick={() =>
              setModal({ ...modal, [MODAL_KEY.APPLY_CHECK]: false })
            }
          >
            <ApplyModalInner
              variants={modalVariants}
              exit={'unActive'}
              animate={'active'}
              initial={'unActive'}
            >
              <ApplyModalInnerWrapper>
                <ApplyModalTitle>최종 제출 전, 확인해주세요.</ApplyModalTitle>
                <ApplyModalContentWrapper>
                  <ApplyModalP>이름</ApplyModalP>
                  <ApplyModalP>{name}</ApplyModalP>
                </ApplyModalContentWrapper>
                <ApplyModalContentWrapper>
                  <ApplyModalP>지원 포지션</ApplyModalP>
                  <ApplyModalP>{position}</ApplyModalP>
                </ApplyModalContentWrapper>
                <ApplyModalContentWrapper>
                  <ApplyModalP>이메일 주소</ApplyModalP>
                  <ApplyModalP>{email}</ApplyModalP>
                </ApplyModalContentWrapper>
                <ApplyModalContentWrapper>
                  <ApplyModalP>전화번호</ApplyModalP>
                  <ApplyModalP>{phoneNumber}</ApplyModalP>
                </ApplyModalContentWrapper>
              </ApplyModalInnerWrapper>
              <ApplyModalP>
                * 지원서 내용은 제출 후 수정이 불가능해요.
              </ApplyModalP>
              <ApplyButtonWrapper>
                <GDSCButton
                  text={'제출하기'}
                  onClick={() => onClick()}
                  color={'blue900'}
                />
                <ApplyModalButtonWrapper>
                  <GDSCButton
                    text={'돌아가기'}
                    onClick={() =>
                      setModal({ ...modal, [MODAL_KEY.APPLY_CHECK]: false })
                    }
                  />
                </ApplyModalButtonWrapper>
              </ApplyButtonWrapper>
            </ApplyModalInner>
          </OutsideClickHandler>
        </ApplyModalWrapper>
      )}
    </AnimatePresence>
  );
};

export default ApplyModal;
