import React from "react";
import RNPickerSelect from "react-native-picker-select";
import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { makeStyles } from "./styles";

interface ISelectProps {
  placeholder?: any;
  items: any;
  onValueChange: () => void;
}

const Select = ({ placeholder, onValueChange, items }: ISelectProps) => {
  const classes = makeStyles();

  return (
    <View style={classes.container}>
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
        items={[
          { label: "Football", value: "football" },
          { label: "Baseball", value: "baseball" },
          { label: "Hockey", value: "hockey" },
        ]}
        onValueChange={() => {}}
      />
    </View>
  );
};

export default Select;
