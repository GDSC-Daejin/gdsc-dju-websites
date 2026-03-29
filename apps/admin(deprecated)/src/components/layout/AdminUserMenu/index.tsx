import React, { useCallback, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';
import { useAtom } from 'jotai';

import { authAtom } from '@src/store/authAtom';
import { resetUserAtom } from '@src/store/userAtom';
import { signOutAdmin } from '@utils/adminAuth';

import { AdminUserMenuWrapper, MenuElement } from './styled';

const AdminUserMenu: React.FC<{
  isOpen: boolean;
  setIsOpen: (data: boolean) => void;
}> = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  const userMenuRef = useRef<HTMLDivElement>(null);
  const [, resetUser] = useAtom(resetUserAtom);
  const [, setAuthState] = useAtom(authAtom);

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
            onClick={async () => {
              setIsOpen(false);
              await signOutAdmin();
              resetUser();
              setAuthState({
                isInitializing: false,
                isAuthenticated: false,
              });
              navigate('/', { replace: true });
            }}
          >
            로그아웃
          </MenuElement>
        </AdminUserMenuWrapper>
      )}
    </AnimatePresence>
  );
};

export default AdminUserMenu;
