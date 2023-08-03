import React, { ChangeEvent, useState } from "react";
import { Text, TextInput, ViewStyle } from "react-native";
import { makeStyles } from "./styles";
import { commonStyles } from "../../theme";

interface ITextFieldProps {
  value: string;
  onChange?: (event: string | ChangeEvent<Element>) => void;
  placeholder?: string;
  label?: string;
  styles?: ViewStyle | ViewStyle[];
  numeric?: boolean;
  error?: boolean;
  onPress?: () => void;
  editable?: boolean;
}

const TextField = ({
  styles,
  onChange,
  value,
  placeholder,
  error,
  onPress,
  label,
  editable = true,
}: ITextFieldProps) => {
  const classes = makeStyles(error);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      {label && <Text style={[commonStyles.p1, classes.label]}>{label}</Text>}
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        onFocus={() => setIsFocused(!isFocused)}
        onBlur={() => setIsFocused(!isFocused)}
        editable={editable}
        onPressIn={onPress}
        style={[classes.input, isFocused && classes.isFocused, styles]}
      />
    </>
  );
};

export default TextField;
