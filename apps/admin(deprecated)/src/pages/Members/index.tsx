import React from 'react';

import MemberCard from '@common/cards/MemberCard';
import MemberInfoModal from '@common/modal/MemberInfoModal';
import { MemberCardWrapper, MemberListSection } from '@pages/Members/styled';
import { AdminContainer, AdminContainerInner } from '@pages/styled';
import { useGetMemberListData } from '@src/apis/hooks/useGetMemberListData';
import { useModalHandle } from '@src/hooks/useModalHandle';
import {IUserInfoDataType} from "@type/userInfoData";
import { IUserDataType } from '@type/userDataType';

const Members = () => {
  const { memberListData } = useGetMemberListData();
  const { openModal, closeModal } = useModalHandle('MEMBER');
  const [selectMember, setSelectMember] = React.useState<IUserDataType | null>(null);
  return (
    <AdminContainer>
      <AdminContainerInner>
        <MemberInfoModal selectMember={selectMember} />
        <MemberListSection>
          {memberListData &&
            memberListData.map((member) => (
              <MemberCardWrapper
                key={member.userId}
                onClick={() => {
                  openModal(member.userId)
                  setSelectMember(member);
                }}
              >
                <MemberCard {...member} />
              </MemberCardWrapper>
            ))}
        </MemberListSection>
      </AdminContainerInner>
    </AdminContainer>
  );
};

export default Members;
