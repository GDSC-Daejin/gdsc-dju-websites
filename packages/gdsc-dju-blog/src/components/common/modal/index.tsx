import React, { useEffect } from 'react';

import { GDSCButton } from '../Button';
import { useRecoilState } from 'recoil';
import { AnimatePresence } from 'framer-motion';
import { IModalType, modalState } from '../../../store/modal';
import {
  ModalBackground,
  ModalButtonWrapper,
  ModalContent,
  ModalContentWrapper,
  ModalInner,
} from './styled';
import OutsideClickHandler from '../../../Utils/OutsideClickHandler';

interface ModalProps {
  onClick?: () => void;
}
const modalAnimate = {
  active: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
  unActive: {
    opacity: 0,
    scale: 0,
    y: 200,
  },
};

const modalType: IModalType = {
  login: {
    description: '로그인이 필요한 서비스입니다.',
    leftButton: '뒤로가기',
    rightButton: '로그인',
    rightColor: 'googleBlue',
  },
  backBlock: {
    description: '정말 이대로 나가시겠어요? 작성해둔 글이 사라져요!',
    leftButton: '아니요',
    rightButton: '삭제하기',
    rightColor: 'googleRed',
  },
  uploadPost: {
    description: '작성하신 글을 업로드 할까요?',
    leftButton: '뒤로가기',
    rightButton: '업로드',
    rightColor: 'googleBlue',
  },
  deleteCheck: {
    description: '정말로 삭제하시겠어요?',
    leftButton: '뒤로가기',
    rightButton: '삭제하기',
    rightColor: 'googleRed',
  },
  update: {
    description: '작성하신 글을 수정할까요?',
    leftButton: '뒤로가기',
    rightButton: '업로드',
    rightColor: 'googleBlue',
  },
};
const Modal: React.FC<ModalProps> = () => {
  const [modal, setModal] = useRecoilState(modalState);
  useEffect(() => {
    document.body.style.cssText = `
    position: fixed; 
    top: -${window.scrollY}px;
    overflow-y: scroll;
    width: 100%;`;

    if (!modal.isOpen) {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    }
  }, [modal]);
  return (
    <AnimatePresence>
      {modal.isOpen && (
        <ModalBackground
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <OutsideClickHandler
            outsideClick={() => setModal({ ...modal, isOpen: false })}
          >
            <ModalInner
              variants={modalAnimate}
              initial={'unActive'}
              animate={'active'}
              transition={{ duration: 0.5 }}
            >
              <ModalContentWrapper>
                <ModalContent>{modalType[modal.type].description}</ModalContent>
                <ModalButtonWrapper>
                  <GDSCButton
                    text={modalType[modal.type].leftButton}
                    onClick={() => setModal({ ...modal, isOpen: false })}
                  />
                  <GDSCButton
                    text={modalType[modal.type].rightButton}
                    color={modalType[modal.type].rightColor}
                    onClick={() =>
                      modal.onClick ? modal.onClick() : undefined
                    }
                  />
                </ModalButtonWrapper>
              </ModalContentWrapper>
            </ModalInner>
          </OutsideClickHandler>
        </ModalBackground>
      )}
    </AnimatePresence>
  );
};

export default Modal;
