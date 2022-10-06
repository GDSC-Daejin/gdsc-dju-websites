import React, { useState } from 'react';

import { useAtom } from 'jotai';
import styled from 'styled-components';

import AdminUserMenu from '@layout/AdminUserMenu';
import { userAtom } from '@src/store/userAtom';

export const AdminNavCategoryWrapper = styled.nav`
  display: flex;
  align-items: center;
`;
export const StyledUserName = styled.div`
  color: ${(props) => props.theme.colors.grey700};
  font-size: ${({ theme }) => theme.fontSizes.textM};
  font-weight: bold;
  white-space: nowrap;
  margin-left: 20px;
  @media (max-width: 500px) {
    font-size: ${({ theme }) => theme.fontSizes.textS};
  }
  &:hover {
    cursor: pointer;
  }
`;

const NavigationElement = () => {
  const [user] = useAtom(userAtom);
  const [adminMenuHandler, setAdminMenuHandler] = useState(false);
  return (
    <AdminNavCategoryWrapper>
      {user.nickname && (
        <>
          <StyledUserName
            onClick={() => setAdminMenuHandler(!adminMenuHandler)}
          >
            Hi {user.nickname}
          </StyledUserName>
          <AdminUserMenu
            isOpen={adminMenuHandler}
            setIsOpen={setAdminMenuHandler}
          />
        </>
      )}
    </AdminNavCategoryWrapper>
  );
};

export default NavigationElement;
