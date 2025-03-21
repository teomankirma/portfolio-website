import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { LanguageEnum } from "@/types";

interface PortfolioState {
  language: LanguageEnum;
  updateState: (partialState: Partial<PortfolioState>) => void;
}

const initialState = {
  language: LanguageEnum.ENGLISH,
};

export const usePortfolioStore = create<PortfolioState>()(
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
