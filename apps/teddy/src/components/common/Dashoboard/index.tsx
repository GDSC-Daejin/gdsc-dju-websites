import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import { useGetUserState } from '../../../api/hooks/useGetUserState';
import { userDataType } from '../../../types';
import { FilterType, ListType } from '../../../types/filterType';
import { dataSort } from '../../../utils/sortData';
import MemberCard from './MemberCard';
import { CardContainer } from './MemberCard/styled';

const DashboardContainer = styled.div``;

const Card = styled.a``;

interface DashboardTitleProps {
  main?: boolean;
}

const DashboardTitle = styled.div<DashboardTitleProps>`
  font-size: var(--title2);
  font-weight: var(--title-font-weight);
  padding: 4rem 0 2rem;

  ${(props) =>
    props.main &&
    css`
      font-size: var(--headline4);
    `};
`;

type DashboardProps = {
  scoreboard: userDataType[] | undefined;
  filter: FilterType;
  ListType: ListType;
};

const NormalUserTitle = ({ filter, ListType }: DashboardProps) => {
  const prefix = ListType === 'to' ? '받은' : '보낸';
  const date = filter === 'weekly' ? '이번주' : '이번달';

  return (
    <DashboardTitle>
      {date} {prefix} 테디
    </DashboardTitle>
  );
};

const RankUserTitle = ({ filter, ListType }: DashboardProps) => {
  const prefix = ListType === 'to' ? '받은' : '보낸';
  const date = filter === 'weekly' ? '이번주' : '이번달';

  return (
    <DashboardTitle main>
      <span style={{ color: 'orange' }}>{date}</span> 테디베어의 주인공!
    </DashboardTitle>
  );
};

const Dashboard = ({ scoreboard, filter, ListType }: DashboardProps) => {
  const [selectedId, setSelectedId] = useState<string>('');

  const { userData } = useGetUserState(filter, selectedId);

  return (
    <>
      {scoreboard ? (
        <>
          {ListType === 'to' ? (
            <DashboardContainer>
              <RankUserTitle
                filter={filter}
                ListType={ListType}
                scoreboard={undefined}
              />
              <CardContainer>
                {dataSort(scoreboard, 'count')
                  .slice(0, 3)
                  .map((userData, index) => (
                    <Card
                      key={userData.id}
                      onClick={() => {
                        setSelectedId(userData.id);
                      }}
                    >
                      <MemberCard userData={userData} grade={index} />
                    </Card>
                  ))}
              </CardContainer>
              <NormalUserTitle
                filter={filter}
                ListType={ListType}
                scoreboard={undefined}
              />
              <CardContainer>
                {dataSort(scoreboard, 'count')
                  .slice(3)
                  .map((userData, index) => (
                    <Card
                      key={userData.id}
                      onClick={() => {
                        setSelectedId(userData.id);
                      }}
                    >
                      <MemberCard userData={userData} grade={index + 3} />
                    </Card>
                  ))}
              </CardContainer>
            </DashboardContainer>
          ) : (
            <>
              <NormalUserTitle
                filter={filter}
                ListType={ListType}
                scoreboard={undefined}
              />
              <CardContainer>
                {dataSort(scoreboard, 'count').map((userData, index) => (
                  <Card
                    key={userData.id}
                    onClick={() => {
                      setSelectedId(userData.id);
                    }}
                  >
                    <MemberCard userData={userData} grade={index} />
                  </Card>
                ))}
              </CardContainer>
            </>
          )}
        </>
      ) : (
        <div>데이터가 없다~</div>
      )}
    </>
  );
};

export default Dashboard;
