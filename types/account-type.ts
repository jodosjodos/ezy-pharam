import { AccountTypeEnum } from "@/enums";

export type AccountType = {
  account: AccountTypeEnum;
  setAccountType: (account: AccountTypeEnum) => void;
  resetAccountType: () => void;
};
