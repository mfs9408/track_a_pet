import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { commonColors, commonStyles } from "../../theme";
import { makeStyles } from "./styles";
import { EIconEnum, EPage } from "../../enums";
import { useNavigation } from "@react-navigation/native";

const mainReminders = [
  { type: "medical", label: "Medical", icon: EIconEnum.MEDICAL },
  { type: "food", label: "Food", icon: EIconEnum.FOOD_BANK },
  { type: "fitness", label: "Fitness", icon: EIconEnum.FITNESS_CENTER },
  { type: "fff", label: "Fitness", icon: EIconEnum.FITNESS_CENTER },
];

const RemindersListPage = () => {
  const classes = makeStyles();
  const navigation = useNavigation();

  return (
    <View style={[commonStyles.commonContainer, commonStyles.commonWrapper]}>
      <Text style={[commonStyles.h2, classes.header]}>
        What type of reminder do you want to create?
      </Text>
      <Text
        style={[commonStyles.h4, commonStyles.interRegular, classes.subHeader]}
      >
        Main reminders
      </Text>
      <View style={classes.buttonContainer}>
        {mainReminders.map(({ type, label, icon }) => (
          <TouchableOpacity
            key={type}
            style={classes.touchableContainer}
            onPress={() =>
              navigation.navigate(EPage.CREATE_REMINDER, { reminderType: type })
            }
          >
            <MaterialIcons
              name={icon}
              size={24}
              color="black"
              style={classes.icon}
            />
            <Text style={[commonStyles.p2, commonColors.darkGrey]}>
              {label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default RemindersListPage;
