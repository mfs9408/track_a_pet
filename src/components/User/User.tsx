import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Avatar } from "react-native-paper";
import { View, Text } from "react-native";
import { EGenderType } from "../../enums";
import { getAvatar } from "../../helpers/getAvatar";
import { makeStyles } from "./styles";
import { commonStyles } from "../../theme";

interface IUserProps {
  name: string;
  owning: string;
  gender: EGenderType;
  avatar?: string;
}

const User = ({ avatar, owning, name, gender }: IUserProps) => {
  const classes = makeStyles();

  return (
    <View style={classes.viewContainer}>
      <Avatar.Image
        size={42}
        source={
          avatar
            ? { uri: avatar }
            : ({ size }) => getAvatar(gender, { width: size, height: size })
        }
        style={classes.avatar}
      />

      <View style={classes.infoContainer}>
        <Text style={[commonStyles.p2, { color: "#828282" }]}>{owning}</Text>
        <Text style={[commonStyles.p1]}>{name}</Text>
      </View>
      <View style={classes.iconContainer}>
        <View style={classes.iconWrapper}>
          <AntDesign name="search1" size={24} color="black" />
        </View>
        <View style={classes.iconWrapper}>
          <AntDesign name="bells" size={24} color="black" />
        </View>
      </View>
    </View>
  );
};

export default User;
