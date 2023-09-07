import React from "react";
import { Text, View, ViewStyle } from "react-native";
import { commonColors, commonStyles } from "../../theme";

interface IAvatarProps {
  name: string;
  style?: ViewStyle | ViewStyle[];
}

const Avatar = ({ name, style }: IAvatarProps) => {
  const firstLetter = name[0];

  return (
    <View
      style={[
        {
          borderRadius: 50,
          backgroundColor: commonColors.primary.color,
          height: 45,
          width: 45,
          justifyContent: "center",
          alignItems: "center",
        },
        style,
      ]}
    >
      <Text style={[commonStyles.p1, { color: "#fff" }]}>
        {firstLetter || "N"}
      </Text>
    </View>
  );
};

export default Avatar;
