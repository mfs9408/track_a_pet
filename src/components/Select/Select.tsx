import React from "react";
import RNPickerSelect from "react-native-picker-select";
import { View, ViewStyle } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { makeStyles } from "./styles";

interface ISelectProps {
  placeholder?: any;
  items: any;
  onValueChange: any;
  value: any;
  error?: boolean;
  styles?: ViewStyle | ViewStyle[];
}

const Select = ({
  placeholder,
  value,
  onValueChange,
  items,
  error,
  styles,
}: ISelectProps) => {
  const classes = makeStyles(error);

  return (
    <View style={[classes.container, styles]}>
      <RNPickerSelect
        placeholder={placeholder}
        Icon={() => (
          <AntDesign
            name="down"
            size={15}
            color="black"
            style={{ color: "rgba(106, 82, 198, 0.4)", marginTop: 2 }}
          />
        )}
        value={value}
        items={items}
        onValueChange={(value) => onValueChange(value)}
      />
    </View>
  );
};

export default Select;
