import { atom } from 'jotai';

export interface AuthAtomState {
  isInitializing: boolean;
  isAuthenticated: boolean;
}

export const initialAuthState: AuthAtomState = {
  isInitializing: true,
  isAuthenticated: false,
};

export const authAtom = atom<AuthAtomState>(initialAuthState);
