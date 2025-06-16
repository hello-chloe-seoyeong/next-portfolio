import { colorchips } from "@/components/postcard/colorChips";
import { create } from "zustand";

type PaletteStoreState = {
  palette: number;
  setPalette: () => void;
};

export const usePaletteStore = create<PaletteStoreState>((set) => ({
  palette: 0,
  setPalette: () =>
    set(() => ({ palette: Math.floor(Math.random() * colorchips.length) })),
}));
