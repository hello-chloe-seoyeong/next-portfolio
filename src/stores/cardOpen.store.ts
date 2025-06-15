import { create } from "zustand";

type CardOpenStoreState = {
  cardId: string | null;
  setCardId: (cardId: string | null) => void;
};

export const useCardOpenStore = create<CardOpenStoreState>((set) => ({
  cardId: null,
  setCardId: (cardId) => set({ cardId }),
}));
