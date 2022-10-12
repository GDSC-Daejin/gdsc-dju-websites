import React from 'react';

import { useGetScoreboard } from '../../../api/hooks/useGetScoreboard';
import { CardElementWrapper, CardList } from '../../../pages/Home/styled';
import { useTeddyUserStore } from '../../../store/teddyUser';
import { FilterType, ListType } from '../../../types/filterType';
import MemberCard from '../MemberCard';

type TeddyMemberCardSectionProps = {
  filterType: FilterType;
  listType: ListType;
};

const TeddyMemberCardSection = ({
  filterType,
  listType,
}: TeddyMemberCardSectionProps) => {
  const setTeddyUserId = useTeddyUserStore((state) => state.setTeddyUserId);
  const { scoreboard } = useGetScoreboard(filterType, listType);
  const sortedScoreboard = scoreboard?.sort((a, b) => b.count - a.count);
  return (
    <>
      {sortedScoreboard && scoreboard && (
        <CardList>
          {sortedScoreboard.map((userData, index) => (
            <CardElementWrapper
              key={index}
              layoutId={`${index}`}
              onClick={() => {
                setTeddyUserId(userData.id);
              }}
            >
              <MemberCard userData={userData} grade={index} />
            </CardElementWrapper>
          ))}
        </CardList>
      )}
    </>
  );
};

export default TeddyMemberCardSection;
