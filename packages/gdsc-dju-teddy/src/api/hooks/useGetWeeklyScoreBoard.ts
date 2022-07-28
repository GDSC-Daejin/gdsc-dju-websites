import useSWR from 'swr';
import Api from '../index';

async function getWeeklyScoreBoard(filter: string) {
  const res = await Api.getWeeklyScoreBoard(filter);
  return res.data;
}

export function useGetWeeklyScoreBoard(filter: string) {
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
