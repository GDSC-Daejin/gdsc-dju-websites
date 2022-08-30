import { atom } from 'jotai';

export interface OnboardUser {
  email: string;
  nickname: string;
  major: string;
}

export const onboardAtom = atom<OnboardUser | null>(null);
