import { ResetPasswordOptions } from "@/types";
import { create } from "zustand";
import { createSelectors } from "./create-selector";

const resetStore = create<ResetPasswordOptions>((set) => ({
  option: "",
  setOption: (value) => set({ option: value }),
}));

export const useResetValue = createSelectors(resetStore);
