import { create } from "zustand";

type BirthdayStore = {
  isMusicPlaying: boolean;
  isSurpriseOpen: boolean;
  wish: string;

  toggleMusic: () => void;
  setMusicPlaying: (value: boolean) => void;

  openSurprise: () => void;

  saveWish: (wish: string) => void;
};

export const useBirthdayStore =
  create<BirthdayStore>((set) => ({
    isMusicPlaying: false,
    isSurpriseOpen: false,
    wish: "",

    toggleMusic: () =>
      set((state) => ({
        isMusicPlaying:
          !state.isMusicPlaying,
      })),

    setMusicPlaying: (value) =>
      set({
        isMusicPlaying: value,
      }),

    openSurprise: () =>
      set({
        isSurpriseOpen: true,
      }),

    saveWish: (wish) =>
      set({
        wish,
      }),
  }));