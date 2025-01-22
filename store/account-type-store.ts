import { AccountTypeEnum } from "@/enums";
import { AccountType } from "@/types";
import { create } from "zustand";
import { createSelectors } from "./create-selector";

const accountTypeStore = create<AccountType>((set) => ({
  account: AccountTypeEnum.PATIENT,
  setAccountType: (status) => set({ account: status }),
  resetAccountType: () => set({ account: AccountTypeEnum.PATIENT }),
}));
export const useAccountTypeStore = createSelectors(accountTypeStore);
