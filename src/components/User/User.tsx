import React from "react";
import { Text, View } from "react-native";
import { EGenderType } from "../../enums";
import { makeStyles } from "./styles";
import { commonStyles } from "../../theme";
import Avatar from "../Avatar";

interface IUserProps {
  name?: string;
  owning?: string;
  gender?: EGenderType;
  avatar?: string;
}

const User = ({ owning, name }: IUserProps) => {
  const classes = makeStyles();

  return (
    <View style={classes.viewContainer}>
      <Avatar name={name || "N"} style={{ marginRight: 10 }} />
      <View style={classes.infoContainer}>
        <Text style={[commonStyles.p2, { color: "#828282" }]}>
          {owning || "owner"}
        </Text>
        <Text style={[commonStyles.p1]}>{name}</Text>
      </View>
    </View>
  );
};

export default User;
