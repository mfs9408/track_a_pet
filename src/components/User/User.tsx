import React from "react";
import { Avatar, Text } from "react-native-paper";
import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

interface IUserProps {
  avatarUrl: string;
  name: string;
  owning: string;
}
import { makeStyles } from "./styles";

const User = ({ avatarUrl, owning, name }: IUserProps) => {
  const classes = makeStyles();

  return (
    <View style={classes.viewContainer}>
      <Avatar.Image
        size={42}
        source={{ uri: avatarUrl }}
        style={classes.avatar}
      />
      <View style={classes.infoContainer}>
        <Text style={{ color: "#828282" }} variant="bodyMedium">
          {owning}
        </Text>
        <Text variant="bodyLarge" style={{ fontWeight: "600" }}>
          {name}
        </Text>
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
