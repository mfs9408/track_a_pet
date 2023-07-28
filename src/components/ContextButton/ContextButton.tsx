import React, { ReactNode } from "react";
import {
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { makeStyles } from "./styles";
import { commonStyles } from "../../theme";

interface IContextButtonProps {
  title: string;
  onPress: () => void;
  icon?: ReactNode;
  endIcon?: ReactNode;
  styles?: ViewStyle | ViewStyle[];
  textStyles?: TextStyle | TextStyle[];
}

const ContextButton = ({
  title,
  onPress,
  icon,
  endIcon,
  styles,
  textStyles,
}: IContextButtonProps) => {
  const classes = makeStyles();

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[commonStyles.boxShadow, classes.container, styles]}>
        <View style={[classes.innerContainer]}>
          <View style={classes.icon}>{icon}</View>
          <Text style={[commonStyles.p2, textStyles]}>{title}</Text>
        </View>
        <View>{endIcon}</View>
      </View>
    </TouchableOpacity>
  );
};

export default ContextButton;
