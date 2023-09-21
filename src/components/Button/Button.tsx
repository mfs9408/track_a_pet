import React from "react";
import { Text, TextStyle, TouchableOpacity, ViewStyle } from "react-native";
import { makeStyles } from "./styles";
import { commonStyles } from "../../theme";

interface IButtonProps {
  title: string;
  onPress?: () => void;
  styles?: ViewStyle | ViewStyle[];
  textStyles?: TextStyle | TextStyle[];
}

const Button = ({ title, onPress, styles, textStyles }: IButtonProps) => {
  const classes = makeStyles();

  return (
    <TouchableOpacity style={[classes.button, styles]} onPress={onPress}>
      <Text style={[commonStyles.p2, commonStyles.buttonText, textStyles]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
