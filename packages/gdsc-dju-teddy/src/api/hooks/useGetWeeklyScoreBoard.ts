import useSWR from 'swr';
import { FilterType } from '../../types/filterType';
import Api from '../index';

async function getWeeklyScoreBoard(filter: FilterType) {
  const res = await Api.getWeeklyScoreBoard(filter);
  return res.data;
}

export function useGetWeeklyScoreBoard(filter: FilterType) {
  const { data: scoreboard, error } = useSWR(
    [`weekly/${filter}`],
    getWeeklyScoreBoard,
  );
  return {
    scoreboard: scoreboard && scoreboard.data,
    error,
    loading: !error && !error,
  };
}
