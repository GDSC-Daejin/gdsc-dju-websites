import { signOut } from 'firebase/auth';
import { AnimatePresence } from 'framer-motion';
import { useAtom } from 'jotai';
import React, { useCallback, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { modalAtom } from '../../../atoms/modalAtom';
import { auth } from '../../../firebase/firebase';
import { AdminUserMenuWrapper, MenuElement } from './styled';

const AdminUserMenu = (props: {
  isOpen: boolean;
  setIsOpen: (data: boolean) => void;
}) => {
  const { isOpen, setIsOpen } = props;
  const [modal, setModal] = useAtom(modalAtom);
  const navigate = useNavigate();
  const userMenuRef = useRef<HTMLDivElement>(null);

  const hoverMotion = {
    cursor: 'pointer',
    backgroundColor: '#E5E8EB',
  };

  const handleClickOutside = useCallback(
    (e: Event) => {
      const target = e.target as Node;
      const username = document.getElementsByClassName('username')[0];
      if (isOpen && target.contains(username || target)) {
        setIsOpen(false);
        document.removeEventListener('click', handleClickOutside);
      }
    },
    [isOpen],
  );

  useEffect(() => {
    if (isOpen) {
      setTimeout(
        () => document.addEventListener('click', handleClickOutside),
        0,
      );
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <AdminUserMenuWrapper
          ref={userMenuRef}
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <MenuElement
            layout
            whileHover={hoverMotion}
            onClick={async () => {
              setIsOpen(false);
              await signOut(auth);
              navigate('/auth');
            }}
          >
            로그아웃
          </MenuElement>
          <MenuElement
            layout
            whileHover={hoverMotion}
            onClick={() => {
              setIsOpen(false);
              setModal({ ...modal, USER_MENU: true });
            }}
          >
            회원가입
          </MenuElement>
        </AdminUserMenuWrapper>
      )}
    </AnimatePresence>
  );
};

export default AdminUserMenu;
