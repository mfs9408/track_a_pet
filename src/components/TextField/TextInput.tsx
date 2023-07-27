import React, { ChangeEvent, useState } from "react";
import { TextInput, ViewStyle } from "react-native";
import { makeStyles } from "./styles";

interface ITextFieldProps {
  value?: string;
  onChange: (event: string | ChangeEvent<Element>) => void;
  placeholder?: string;
  styles?: ViewStyle | ViewStyle[];
  numeric?: boolean;
  error?: boolean;
}

const TextField = ({
  styles,
  onChange,
  value,
  placeholder,
  error,
}: ITextFieldProps) => {
  const classes = makeStyles(error);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChange}
      onFocus={() => setIsFocused(!isFocused)}
      onBlur={() => setIsFocused(!isFocused)}
      style={[classes.input, isFocused && classes.isFocused, styles]}
    />
  );
};

export default TextField;
