import React, { ChangeEvent, useState } from "react";
import { Text, TextInput, ViewStyle } from "react-native";
import { makeStyles } from "./styles";
import { commonStyles } from "../../theme";

interface ITextFieldProps {
  value: string | undefined;
  onChange?: (event: string | ChangeEvent<Element>) => void;
  placeholder?: string;
  label?: string;
  styles?: ViewStyle | ViewStyle[];
  numeric?: boolean;
  error?: boolean;
  onPress?: () => void;
  editable?: boolean;
  multiline?: boolean;
}

const TextField = ({
  styles,
  onChange,
  value,
  placeholder,
  error,
  onPress,
  label,
  multiline,
  editable = true,
}: ITextFieldProps) => {
  const classes = makeStyles(error);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      {label && <Text style={[commonStyles.p1, classes.label]}>{label}</Text>}
      <TextInput
        placeholder={placeholder}
        value={value || ""}
        onChangeText={onChange}
        onFocus={() => setIsFocused(!isFocused)}
        onBlur={() => setIsFocused(!isFocused)}
        editable={editable}
        onPressIn={onPress}
        style={[
          classes.input,
          isFocused && classes.isFocused,
          multiline && { paddingTop: 10.5, height: "auto" },
          !editable && { backgroundColor: "#ccc" },
          styles,
        ]}
        multiline={multiline}
      />
    </>
  );
};

export default TextField;
