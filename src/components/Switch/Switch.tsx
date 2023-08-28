import React from "react";
import { Switch as RNSwitch, Text, ViewStyle } from "react-native";
import { commonStyles } from "../../theme";
import { makeStyles } from "./styles";

interface ISwitchProps {
  value: boolean;
  toggleSwitch: (value: boolean) => void;
  label?: string;
  styles?: ViewStyle | ViewStyle[];
}

const Switch = ({ value, toggleSwitch, label, styles }: ISwitchProps) => {
  const classes = makeStyles();

  return (
    <>
      {label && <Text style={[commonStyles.p1, classes.label]}>{label}</Text>}
      <RNSwitch
        trackColor={{
          false: "rgba(230, 230, 230, 1)",
          true: "rgba(129, 110, 199, 1)",
        }}
        thumbColor="#fff"
        value={value}
        onValueChange={toggleSwitch}
        style={[
          {
            height: 20,
            marginTop: -8,
            transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }],
          },
          styles,
        ]}
      />
    </>
  );
};

export default Switch;
