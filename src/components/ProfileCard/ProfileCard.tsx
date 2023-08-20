import React from "react";
import { Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { EPage } from "../../enums";
import { commonColors, commonStyles } from "../../theme";
import { makeStyles } from "./styles";

interface IProfileICard {
  title: string;
  pageNavigate?: EPage;
  icon: React.ReactNode;
  rightElement?: React.ReactNode;
  lastElement?: boolean;
  disabled?: boolean;
}

const ProfileCard = ({
  title,
  pageNavigate,
  icon,
  rightElement,
  lastElement = false,
  disabled,
}: IProfileICard) => {
  const classes = makeStyles();
  const navigation = useNavigation();

  return (
    <>
      <Pressable
        onPress={() =>
          pageNavigate && !disabled && navigation.navigate(pageNavigate as any)
        }
        style={[
          classes.container,
          disabled && { backgroundColor: "rgba(95,91,91,0.3)" },
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
