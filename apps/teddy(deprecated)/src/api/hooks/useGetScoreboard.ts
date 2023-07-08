import useSWR from 'swr';

import { FilterType, ListType } from '../../types/filterType';
import Api from '../index';

async function getScoreboard(filter: FilterType, listType: ListType) {
  const res = await Api.getScoreboard(filter, listType);
  return res.data;
}

export function useGetScoreboard(filter: FilterType, listType: ListType) {
  const { data: scoreboard, error } = useSWR([`${filter}/${listType}`], () =>
    getScoreboard(filter, listType),
  );
  return {
    scoreboard: scoreboard && scoreboard.data,
    error,
    loading: !error && !error,
  };
}
