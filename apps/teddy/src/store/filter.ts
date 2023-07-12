import { create } from 'zustand';

import { FilterType, ListType, ScoreType } from '../types/filterType';

type FilterStore = {
  filter: {
    filterType: FilterType;
    listType: ListType;
    scoreType: ScoreType;
  };
  setFilter: (filterType: FilterType) => void;
  setListFilter: (listType: ListType) => void;
};

export const useFilterStore = create<FilterStore>((set) => ({
  filter: {
    filterType: 'weekly',
    listType: 'to',
    scoreType: 'inc',
  },
  setFilter: (filter: FilterType) =>
    set((state) => ({
      filter: {
        ...state.filter,
        filterType: filter,
      },
    })),
  setListFilter: (filter: ListType) =>
    set((state) => ({
      filter: {
        ...state.filter,
        listType: filter,
      },
    })),
}));
