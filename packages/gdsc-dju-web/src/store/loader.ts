import { atom } from 'recoil';

export const Loader = 'loader';
export const LoaderState = {
  load: true,
};
export const loaderState = atom<typeof LoaderState>({
  key: Loader,
  default: LoaderState,
});
