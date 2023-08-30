import React from "react";
import { Pressable, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { commonColors, commonStyles } from "../../theme";
import { makeStyles } from "./styles";

interface IProfileICard {
  title: string;
  onPress?: () => void;
  icon: React.ReactNode;
  rightElement?: React.ReactNode;
  lastElement?: boolean;
  disabled?: boolean;
  style?: any;
}

const ProfileCard = ({
  title,
  onPress,
  icon,
  rightElement,
  lastElement = false,
  disabled,
  style,
}: IProfileICard) => {
  const classes = makeStyles();

  const onButtonPress = () => {
    if (onPress && !disabled) {
      return onPress();
    }
  };

  return (
    <>
      <Pressable
        onPress={onButtonPress}
        style={[
          classes.container,
          disabled && { backgroundColor: "rgba(95,91,91,0.3)" },
          style,
        ]}
      >
        <View style={[commonStyles.alignCenter, commonStyles.directionRow]}>
          <View style={{ marginRight: 10 }}>{icon}</View>
          <Text
            style={[
              commonStyles.p2,
              disabled && commonColors.semiTransparentGrey,
            ]}
          >
            {title}
          </Text>
        </View>
        {rightElement ? (
          rightElement
        ) : (
          <AntDesign name="right" size={17} color="rgba(196, 196, 196, 1)" />
        )}
      </Pressable>
      {!lastElement && (
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: "#D9D9D9",
          }}
        ></View>
      )}
    </>
  );
};

export default ProfileCard;
