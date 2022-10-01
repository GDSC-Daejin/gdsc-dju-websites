import React from 'react';
import { useGetScoreboard } from '../../api/hooks/useGetScoreboard';
import Dashboard from '../../components/common/Dashboard';
import { useFilterStore } from '../../store/filter';
import { ContainerInner, LayoutContainer } from '../../styles/layouts';

const Weekly = () => {
  const filter = useFilterStore((state) => state.filter);
  const { scoreboard } = useGetScoreboard(filter.filterType, filter.listType);
  return (
    <LayoutContainer>
      <ContainerInner>
        <Dashboard scoreboard={scoreboard} filter={filter.filterType} />
      </ContainerInner>
    </LayoutContainer>
  );
};

export default Weekly;
