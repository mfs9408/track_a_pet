import React, { ReactNode } from "react";
import { Text, TouchableOpacity, View, ViewStyle } from "react-native";
import { makeStyles } from "./styles";

interface IChipProps {
  id: string;
  label: string;
  value: ReactNode;
  onChange: (event: string) => void;
  icon?: React.ReactNode;
  styles?: ViewStyle | ViewStyle[];
}

const Chip = ({ id, value, label, onChange, styles, icon }: IChipProps) => {
  const isSelected = id == value;
  const classes = makeStyles(isSelected);

  return (
    <TouchableOpacity
      onPress={() => onChange(id)}
      style={[styles, classes.wrapper]}
    >
      <View style={classes.container}>
        {icon}
        <Text>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Chip;
