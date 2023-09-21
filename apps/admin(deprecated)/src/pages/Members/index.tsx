import React from 'react';
import MemberCard from '@common/cards/MemberCard';
import MemberInfoModal from '@common/modal/MemberInfoModal';
import {
  MemberCardWrapper,
  MemberListSection,
  RoleSection,
} from '@pages/Members/styled';
import { AdminContainer, AdminContainerInner } from '@pages/styled';
import { useGetMemberListData } from '@src/apis/hooks/useGetMemberListData';
import { useModalHandle } from '@src/hooks/useModalHandle';
import { IUserDataType } from '@type/userDataType';

const Members = () => {
  const { memberListData } = useGetMemberListData();
  const { openModal, closeModal } = useModalHandle('MEMBER');
  const [selectMember, setSelectMember] = React.useState<IUserDataType | null>(
    null,
  );

  // Sort memberListData by role: CORE > MEMBER > GUEST
  const sortedMemberList = memberListData
    ? [...memberListData].sort((a, b) => {
        if (a.role === 'CORE') return -1;
        if (b.role === 'CORE') return 1;
        if (a.role === 'MEMBER') return -1;
        if (b.role === 'MEMBER') return 1;
        return 0;
      })
    : [];

  // Organize members into separate arrays based on their roles
  const roleSections: { [key: string]: IUserDataType[] } =
    sortedMemberList.reduce(
      (sections, member) => {
        if (!sections[member.role]) {
          sections[member.role] = [];
        }
        sections[member.role].push(member);
        return sections;
      },
      {} as { [key: string]: IUserDataType[] }, // Provide an initial empty object with the correct type
    );

  return (
    <AdminContainer>
      <AdminContainerInner>
        <MemberInfoModal selectMember={selectMember} />

        {Object.entries(roleSections).map(([role, members]) => (
          <MemberListSection key={role}>
            <RoleSection>{role}</RoleSection>
            {members.map((member) => (
              <MemberCardWrapper
                key={member.userId}
                onClick={() => {
                  openModal(member.userId);
                  setSelectMember(member);
                }}
              >
                <MemberCard {...member} />
              </MemberCardWrapper>
            ))}
          </MemberListSection>
        ))}
      </AdminContainerInner>
    </AdminContainer>
  );
};

export default Members;
