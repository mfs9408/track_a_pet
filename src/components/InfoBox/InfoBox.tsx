import React from "react";
import { Text } from "react-native";
import { makeStyles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { commonStyles } from "../../theme";

interface IInfoBoxProps {
  title: string | number;
  description: string;
}

const InfoBox = ({ title, description }: IInfoBoxProps) => {
  const classes = makeStyles();

  return (
    <LinearGradient colors={["#E8E1FF", "#fcfbfe"]} style={classes.container}>
      <Text style={[commonStyles.p2, classes.title]}>{title}</Text>
      <Text style={[commonStyles.p3, classes.description]}>{description}</Text>
    </LinearGradient>
  );
};

export default InfoBox;
