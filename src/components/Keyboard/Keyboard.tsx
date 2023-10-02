import React, { PropsWithChildren } from "react";
import { KeyboardAvoidingView } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";

const Keyboard = ({ children }: PropsWithChildren) => {
  const headerHeight = useHeaderHeight();

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={headerHeight}
      behavior="padding"
    >
      {children}
    </KeyboardAvoidingView>
  );
};

export default Keyboard;
