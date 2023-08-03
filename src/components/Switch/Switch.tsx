import React from "react";
import { Switch as RNSwitch } from "react-native";

interface ISwitchProps {
  value: boolean;
  toggleSwitch: () => void;
}

const Switch = ({ value, toggleSwitch }: ISwitchProps) => {
  return (
    <RNSwitch
      trackColor={{
        false: "rgba(230, 230, 230, 1)",
        true: "rgba(129, 110, 199, 1)",
      }}
      thumbColor="#fff"
      value={value}
      onValueChange={toggleSwitch}
      style={{
        height: 20,
        marginTop: -8,
        transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }],
      }}
    />
  );
};

export default Switch;
