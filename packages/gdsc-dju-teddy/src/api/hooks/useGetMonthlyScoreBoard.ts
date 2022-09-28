import { FilterType } from '../../types/filterType';
import Api from '../index';
import useSWR from 'swr';

async function getMonthlyScoreBoard(filter: FilterType) {
  const res = await Api.getMonthlyScoreBoard(filter);
  return res.data;
}

export function useGetMonthlyScoreBoard(filter: FilterType) {
  const { data: scoreboard, error } = useSWR(
    [`monthly/${filter}`],
    getMonthlyScoreBoard,
  );
  return {
    scoreboard: scoreboard && scoreboard.data,
    error,
    loading: !error && !scoreboard,
  };
}
