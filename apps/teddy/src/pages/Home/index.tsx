import React from 'react';
import styled from 'styled-components';
import { useGetScoreboard } from '../../api/hooks/useGetScoreboard';
import Dashboard from '../../components/common/Dashoboard';
import { useFilterStore } from '../../store/filter';
//import { ContainerInner, LayoutContainer } from '../../styles/layouts';

const LayoutContainer = styled.div`
  align-items: center;
  list-style: none;
  overflow: auto;
  padding: 0 0vw 5vw 5vw;
`;
const ContainerInner = styled.div``;
const DashboardTitle = styled.p`
  font-size: var(--headline4);
`;
const Home = () => {
  const filter = useFilterStore((state) => state.filter);
  const { scoreboard } = useGetScoreboard(filter.filterType, filter.listType);

  return (
    <LayoutContainer>
      <Dashboard
        scoreboard={scoreboard}
        filter={filter.filterType}
        ListType={filter.listType}
      />
    </LayoutContainer>
  );
};

export default Home;
