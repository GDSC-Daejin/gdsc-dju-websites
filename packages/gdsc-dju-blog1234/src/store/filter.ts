import { atom, selector } from 'recoil';

const POST_FILTER = 'postFilter';
const POST_FILTER_SELECTOR = 'postFilterSelector';

export const POST_FILTER_KEY = {
  PAGE: 'page',
  SIZE: 'size',
  SORT: 'sort',
} as const;

export const PostFilterState = {
  [POST_FILTER_KEY.PAGE]: { text: 0 },
  [POST_FILTER_KEY.SIZE]: { text: '' },
  [POST_FILTER_KEY.SORT]: { text: '' },
};
export const postFilterState = atom<typeof PostFilterState>({
  key: POST_FILTER,
  default: PostFilterState,
});

export const postFilterSelector = selector<typeof PostFilterState>({
  key: POST_FILTER_SELECTOR,
  get: ({ get }) => {
    const filter = get(postFilterState);
    return filter;
  },
});
