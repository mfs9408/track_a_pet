import React, { Dispatch, SetStateAction } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { makeStyles } from "./styles";

interface IChipProps {
  value: string;
  selected: boolean;
  setSelected: Dispatch<SetStateAction<boolean>>;
  icon?: React.ReactNode;
  styles?: any;
}

const Chip = ({ selected, value, setSelected, styles, icon }: IChipProps) => {
  const classes = makeStyles(selected);

  return (
    <TouchableOpacity
      onPress={() => setSelected(!selected)}
      style={[styles, classes.wrapper]}
    >
      <View style={classes.container}>
        {icon}
        <Text>{value}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Chip;
