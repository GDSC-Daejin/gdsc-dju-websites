import React from 'react';
import ApplicantModal from '../../admin/ApplicantModal';
import { useRecoilState } from 'recoil';
import { modalState } from '../../../store/modal';
import ApplyModal from './ApplyModal';
import { AnimatePresence } from 'framer-motion';

const Modal = () => {
  const [modal, setModal] = useRecoilState(modalState);
  return (
    <AnimatePresence>
      {/*{modal.applyCheck && <ApplyModal />}*/}
    </AnimatePresence>
  );
};

export default Modal;
