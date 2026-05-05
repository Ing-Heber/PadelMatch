import { create } from 'zustand';

type AppStoreState = {
  playerNameDraft: string;
  setPlayerNameDraft: (value: string) => void;
  clearPlayerNameDraft: () => void;
};

export const useAppStore = create<AppStoreState>((set) => ({
  playerNameDraft: '',
  setPlayerNameDraft: (value) => set({ playerNameDraft: value }),
  clearPlayerNameDraft: () => set({ playerNameDraft: '' }),
}));

