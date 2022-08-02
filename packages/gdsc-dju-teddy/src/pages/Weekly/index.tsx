import React from 'react';
import { useGetWeeklyScoreBoard } from '../../api/hooks/useGetWeeklyScoreBoard';
import Dashboard from '../../components/common/Dashboard';

const Weekly = ({ filter }: any) => {
  const { scoreboard } = useGetWeeklyScoreBoard(filter);

  return <Dashboard scoreboard={scoreboard} />;
};

export default Weekly;
