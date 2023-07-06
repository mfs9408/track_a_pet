import React, { Dispatch, SetStateAction, useState } from "react";
import { TextInput } from "react-native";
import { makeStyles } from "./styles";

interface ITextFieldProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  styles?: any;
  placeholder?: string;
}

const TextField = ({
  styles,
  setValue,
  value,
  placeholder,
}: ITextFieldProps) => {
  const classes = makeStyles();
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={setValue}
      onFocus={() => setIsFocused(!isFocused)}
      onBlur={() => setIsFocused(!isFocused)}
      style={[classes.input, isFocused && classes.isFocused, styles]}
    />
  );
};

export default TextField;
