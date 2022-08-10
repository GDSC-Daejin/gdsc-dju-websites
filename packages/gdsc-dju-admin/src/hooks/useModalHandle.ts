import { useAtom } from 'jotai';
import { ModalKey, modalAtom } from '../store/modalAtom';

export const useModalHandle = (key: ModalKey) => {
  const [modal, setModal] = useAtom(modalAtom);

  const closeModal = () => {
    setModal({
      ...modal,
      isOpen: null,
    });
  };
  const openModal = (id?: string) => {
    setModal({
      ...modal,
      isOpen: key,
      selectedID: id ?? '',
    });
  };
  return { modal, openModal, closeModal };
};
