import React from "react";
import { Image, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { commonColors, commonStyles } from "../../theme";
import Button from "../../components/Button";
import { useSelector } from "../../store";
import { EPage } from "../../enums";
import { makeStyles } from "./styles";

const CurrentRemindersPage = () => {
  const navigation = useNavigation();
  const allReminders = useSelector((state) => state.reminders);
  const classes = makeStyles();

  return (
    <View style={[commonStyles.commonContainer, commonStyles.commonWrapper]}>
      <Text style={[commonStyles.h2, classes.header]}>Current reminders</Text>
      {allReminders.length == 0 && (
        <View style={classes.noRemindersContainer}>
          <Text
            style={[commonStyles.p2, commonColors.darkGrey, classes.subHeader]}
          >
            There is no any reminders for you pets. Do you want to add it?
          </Text>
          <Image
            style={{ width: "100%" }}
            source={require("../../../assets/images/paws.png")}
          />
        </View>
      )}
      <Button
        title="Create a new reminder"
        onPress={() => navigation.navigate(EPage.REMINDERS_LIST)}
      />
    </View>
  );
};

export default CurrentRemindersPage;
