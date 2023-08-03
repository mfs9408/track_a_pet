import React, { useEffect, useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import { Text, View, ViewStyle } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { makeStyles } from "./styles";
import { commonStyles } from "../../theme";

interface ISelectProps {
  placeholder?: any;
  items: any[];
  onValueChange: any;
  value: any;
  label?: string;
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
  label,
}: ISelectProps) => {
  const classes = makeStyles(error);
  const [selected, setSelected] = useState(value?.value || null);

  useEffect(() => {
    const foo = items.find((item) => selected === item.value);
    onValueChange(foo);
  }, [selected]);

  return (
    <>
      {label && <Text style={[commonStyles.p1, classes.label]}>{label}</Text>}
      <View style={[classes.container, styles]}>
        <RNPickerSelect
          placeholder={placeholder}
          // @ts-ignore as a bug
          Icon={() => (
            <AntDesign
              name="down"
              size={15}
              color="black"
              style={{ color: "rgba(106, 82, 198, 0.4)", marginTop: 2 }}
            />
          )}
          value={selected}
          items={items}
          onValueChange={(value) => setSelected(value)}
        />
      </View>
    </>
  );
};

export default Select;
