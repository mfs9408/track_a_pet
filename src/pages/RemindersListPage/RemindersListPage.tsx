import React from "react";
import { Text, View } from "react-native";
import { commonStyles } from "../../theme";
import { makeStyles } from "./styles";

const RemindersListPage = () => {
  const classes = makeStyles();

  return (
    <View style={[commonStyles.commonContainer, commonStyles.commonWrapper]}>
      <Text style={[commonStyles.h2, classes.header]}>
        What type of reminder do you want to create?
      </Text>
    </View>
  );
};

export default RemindersListPage;
