import React from "react";
import { Pressable, Text, TouchableOpacity } from "react-native";
import { makeStyles } from "./styles";
import { commonStyles } from "../../theme";

interface IButtonProps {
  title: string;
  onPress: () => void;
  styles?: any;
  textStyles?: any;
}

const Button = ({ title, onPress, styles, textStyles }: IButtonProps) => {
  const classes = makeStyles();

  return (
    <TouchableOpacity style={[classes.button, styles]} onPress={onPress}>
      <Text style={[commonStyles.p2, classes.text, textStyles]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
