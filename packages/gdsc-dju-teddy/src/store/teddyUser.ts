import create from 'zustand';

type TeddyUserStore = {
  teddyUser: {
    id: string;
  };
  setTeddyUserId: (id: string) => void;
};

export const useTeddyUserStore = create<TeddyUserStore>((set) => ({
  teddyUser: {
    id: '',
  },
  setTeddyUserId: (id: string) =>
    set((state) => ({
      teddyUser: {
        ...state.teddyUser,
        id: id,
      },
    })),
}));
