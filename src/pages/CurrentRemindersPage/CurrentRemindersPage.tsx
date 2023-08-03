import React from "react";
import { Image, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/Button";
import DraggableFlat from "../../components/DraggableFlatList";
import { commonColors, commonStyles } from "../../theme";
import { useSelector } from "../../store";
import { EPage } from "../../enums";
import { makeStyles } from "./styles";

const CurrentRemindersPage = () => {
  const navigation = useNavigation();
  const allReminders = useSelector((state) => state.reminders);
  const classes = makeStyles();

  return (
    <View style={[commonColors.background, { height: "100%" }]}>
      <View style={[commonStyles.commonWrapper]}>
        <Text style={[commonStyles.h2]}>Current reminders</Text>
      </View>
      {allReminders.length > 0 && (
        <DraggableFlat
          styles={{ marginVertical: 20, paddingHorizontal: 28, height: "75%" }}
          data={allReminders}
        />
      )}
      <View style={[commonStyles.commonWrapper]}>
        {allReminders.length == 0 && (
          <View style={classes.noRemindersContainer}>
            <Text
              style={[
                commonStyles.p2,
                commonColors.darkGrey,
                classes.subHeader,
              ]}
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
    </View>
  );
};

export default CurrentRemindersPage;
