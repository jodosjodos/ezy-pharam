import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useAccountTypeStore } from "@/store";
import { AccountTypeEnum } from "@/enums";
interface RadioGroupOption {
  id: string;
  label: string;
  value: AccountTypeEnum;
}
interface RadioGroupProps {
  roles: RadioGroupOption[];
}
const RadioButtonGroupComponent: React.FC<RadioGroupProps> = ({ roles }) => {
  const accountType = useAccountTypeStore.use.account();
  const [selected, setSelected] = useState<AccountTypeEnum | undefined>(accountType);
  const setAccountType =useAccountTypeStore.use.setAccountType()
  const handleAccountType = (value: AccountTypeEnum) => {
    setAccountType(value);
    setSelected(value);

  };
  return (
    <View className="p-5">
      {roles.map((role) => (
        <TouchableOpacity
          key={role.id}
          className="flex-row items-center mb-4"
          onPress={() => handleAccountType(role.value)}
        >
          <View
            className={`h-6 w-6 rounded-full border-2 ${
              selected === role.value ? "border-bg_primary" : "border-[#49454F]"
            } items-center justify-center mr-3`}
          >
            {selected === role.value && (
              <View className="h-3 w-3 rounded-full bg-blue-500" />
            )}
          </View>
          <Text className="text-base text-[#ADB3BC]">{role.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default RadioButtonGroupComponent;
