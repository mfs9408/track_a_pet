import React, { useEffect, useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import { Text, View, ViewStyle } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { makeStyles } from "./styles";
import { commonStyles } from "../../theme";

interface IValueProps {
  id: string | null;
  value: string;
}

interface ISelectProps {
  placeholder?: IValueProps;
  value: IValueProps | null | undefined;
  items: IValueProps[];
  onValueChange: any;
  label?: string;
  error?: boolean;
  icon?: boolean;
  styles?: ViewStyle | ViewStyle[];
  placeholderStyle?: ViewStyle;
  pickerStyle?: ViewStyle;
}

const Select = ({
  value,
  onValueChange,
  items,
  error,
  styles,
  label,
  placeholder,
  placeholderStyle,
  pickerStyle,
  icon = true,
}: ISelectProps) => {
  const classes = makeStyles(error);
  const [selected, setSelected] = useState(value?.id || null);

  const pickerPlaceholder = {
    label: placeholder?.value,
    value: placeholder?.id,
  };
  const pickerItems = items.map((item) => ({
    value: item?.id,
    label: item?.value,
  }));

  useEffect(() => {
    const item = items.find((item) => selected === item.id);

    const pureItem = item
      ? {
          id: item.id,
          value: item.value,
        }
      : null;

    onValueChange(pureItem);
  }, [selected]);

  return (
    <>
      {label && <Text style={[commonStyles.p1, classes.label]}>{label}</Text>}
      <View style={[classes.container, styles]}>
        <RNPickerSelect
          style={{
            inputIOSContainer: pickerStyle,
            placeholder: placeholderStyle,
          }}
          placeholder={pickerPlaceholder}
          value={selected}
          items={pickerItems}
          onValueChange={(value) => setSelected(value)}
          // @ts-ignore as a bug
          Icon={() =>
            icon && (
              <AntDesign
                name="down"
                size={15}
                color="black"
                style={{ color: "rgba(106, 82, 198, 0.4)", marginTop: 2 }}
              />
            )
          }
        />
      </View>
    </>
  );
};

export default Select;
