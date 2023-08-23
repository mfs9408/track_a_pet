import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, Text, View } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import DraggableFlat from "../../components/DraggableFlatList";
import ContextButton from "../../components/ContextButton";
import User from "../../components/User";
import { useSelector } from "../../store";
import { commonColors, commonStyles } from "../../theme";
import { EPage, ERemindersType } from "../../enums";
import { commonDataActions } from "../../store/commonData";
import { makeStyles } from "./styles";
import { filterTodayEvents } from "../../helpers";

const MainPage = () => {
  const classes = makeStyles();
  const dispatch = useDispatch();
  const [time, setTime] = useState(Date.now());
  const navigation = useNavigation();
  const user = useSelector((store) => store.user.user);
  const activity = useSelector((store) => store.reminders.activity) || [];
  const appointments =
    useSelector((store) => store.reminders.appointments) || [];

  const currentActivity = filterTodayEvents(activity);
  const currentAppointments = filterTodayEvents(appointments);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(commonDataActions.changeDate(time));

      return setTime(Date.now());
    }, 20000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <SafeAreaView style={classes.container}>
      <View style={classes.commonWrapper}>
        <User
          gender={user?.gender}
          name={user?.name}
          owning={user?.owning}
          avatar={user?.avatar}
        />
        <Text style={[commonStyles.h3, classes.blockHeader]}>
          Your today's activity
        </Text>
      </View>
      <View style={classes.flatListContainer}>
        <DraggableFlat
          data={currentActivity}
          style={{ maxHeight: 200 }}
          contentContainerStyle={[classes.commonPadding]}
          type={ERemindersType.MAIN_PAGE_ACTIVITY}
        />
        {currentActivity.length === 0 && (
          <View style={classes.commonPadding}>
            <Text style={[commonStyles.p2, commonColors.darkGrey]}>
              You don't have any activities today
            </Text>
          </View>
        )}
      </View>
      <View style={classes.addButtonsContainer}>
        <ContextButton
          title="Add a reminder"
          onPress={() => navigation.navigate(EPage.CURRENT_REMINDERS)}
          textStyles={commonStyles.interSemiBold}
          icon={
            <Ionicons
              name="notifications-outline"
              size={24}
              color={commonColors.primary.color}
            />
          }
          endIcon={
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color={commonColors.primary.color}
            />
          }
        />
      </View>
      <View style={[classes.commonWrapper, { paddingTop: 10 }]}>
        <Text style={[commonStyles.h3, classes.blockHeader]}>
          Your today's appointments
        </Text>
      </View>
      <View style={classes.flatListContainer}>
        <View style={classes.commonPadding}>
          <DraggableFlat
            data={currentAppointments}
            style={{ maxHeight: 200 }}
            type={ERemindersType.APPOINTMENT}
          />
          {currentAppointments.length === 0 && (
            <Text style={[commonStyles.p2, commonColors.darkGrey]}>
              You don't have any appointments today
            </Text>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MainPage;
