import { atom } from 'recoil';

export const Loader = 'loader';

export const LoaderState = {
  loading: false,
  background: false,
};
export const loaderState = atom<typeof LoaderState>({
  key: Loader,
  default: LoaderState,
});
