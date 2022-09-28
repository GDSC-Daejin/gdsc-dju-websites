import React from 'react';
import { useGetMonthlyScoreBoard } from '../../api/hooks/useGetMonthlyScoreBoard';
import Dashboard from '../../components/common/Dashboard';

const Home = ({ filter }: any) => {
  const { scoreboard } = useGetMonthlyScoreBoard(filter);

  return <Dashboard scoreboard={scoreboard} />;
};

export default Home;
