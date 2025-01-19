import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
interface RadioGroupOption {
  id: string;
  label: string;
  value: string;
}
interface RadioGroupProps {
  roles: RadioGroupOption[];
}
const RadioButtonGroupComponent: React.FC<RadioGroupProps> = ({ roles }) => {
  const [selected, setSelected] = useState<string | undefined>();

  return (
    <View className="p-5">
      {roles.map((role) => (
        <TouchableOpacity
          key={role.id}
          className="flex-row items-center mb-4"
          onPress={() => setSelected(role.value)}
        >
          <View className={`h-6 w-6 rounded-full border-2 ${selected ===role.value?"border-bg_primary":"border-[#49454F]"} items-center justify-center mr-3`}>
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
