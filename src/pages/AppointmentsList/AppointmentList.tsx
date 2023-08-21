import React from "react";
import { Image, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { commonColors, commonStyles } from "../../theme";
import { makeStyles } from "./styles";
import { useSelector } from "../../store";
import Button from "../../components/Button";
import { EPage, ERemindersType } from "../../enums";
import DraggableFlat from "../../components/DraggableFlatList";

const AppointmentList = () => {
  const classes = makeStyles();
  const navigation = useNavigation();
  const allAppointments = useSelector(
    (state) => state.reminders.appointments || []
  );

  return (
    <View style={[commonColors.background, classes.commonWrapper]}>
      <View style={[commonStyles.commonWrapper]}>
        <Text style={[commonStyles.h2]}>Current appointments</Text>
      </View>
      {allAppointments.length > 0 && (
        <DraggableFlat
          style={classes.flatList}
          data={allAppointments}
          type={ERemindersType.APPOINTMENT}
        />
      )}
      <View style={[commonStyles.commonWrapper]}>
        {allAppointments.length == 0 && (
          <View style={classes.noRemindersContainer}>
            <Text
              style={[
                commonStyles.p2,
                commonColors.darkGrey,
                classes.subHeader,
              ]}
            >
              There is no any appointments for you pets. Do you want to add it?
            </Text>
            <Image
              style={{ width: "100%" }}
              source={require("../../../assets/images/paws.png")}
            />
          </View>
        )}
        <Button
          title="Create a new appointment"
          onPress={() => navigation.navigate(EPage.CREATE_APPOINTMENT)}
        />
      </View>
    </View>
  );
};

export default AppointmentList;
