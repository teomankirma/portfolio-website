import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { LanguageEnum } from "@/types";

interface PortfolioState {
  language: string;
}

const initialState = {
  language: LanguageEnum.ENGLISH,
};

export const useStore = create<PortfolioState>()(
  devtools((set) => ({
    ...initialState,

    // Generic
    updateState: (partialState: Partial<PortfolioState>) => {
      set((state) => ({
        ...state,
        ...partialState,
      }));
    },

    resetState: () => {
      set(() => ({
        ...initialState,
      }));
    },
  }))
);
