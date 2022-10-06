import React from 'react';

import { useGetScoreboard } from '../../api/hooks/useGetScoreboard';
import Dashboard from '../../components/common/Dashboard';
import { useFilterStore } from '../../store/filter';
import { ContainerInner, LayoutContainer } from '../../styles/layouts';

const Home = () => {
  const filter = useFilterStore((state) => state.filter);
  const { scoreboard } = useGetScoreboard(filter.filterType, filter.listType);
  const sortedScoreboard = scoreboard?.sort((a, b) => b.count - a.count);

  return (
    <LayoutContainer>
      <ContainerInner>
        <Dashboard scoreboard={sortedScoreboard} filter={filter.filterType} />
      </ContainerInner>
    </LayoutContainer>
  );
};

export default Home;
