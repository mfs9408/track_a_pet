import React from "react";
import { View, ActivityIndicator } from "react-native";

const LoadingPage = () => {
  return (
    <View
      style={{
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator />
    </View>
  );
};

export default LoadingPage;
