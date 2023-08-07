import React, { PropsWithChildren } from "react";
import { KeyboardAvoidingView, TouchableWithoutFeedback } from "react-native";

const Keyboard = ({ children }: PropsWithChildren) => {
  return (
    <KeyboardAvoidingView behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {children}
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Keyboard;
