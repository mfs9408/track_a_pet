import React, { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { LayoutAnimation, SafeAreaView, Text, View } from "react-native";
import DraggableFlatList, {
  RenderItemParams,
} from "react-native-draggable-flatlist";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import User from "../../components/User";
import RemindBuilder from "../../components/RemindBulder";
import ContextButton from "../../components/ContextButton";
import { useSelector } from "../../store";
import { IActivityItem, IAppointmentItem } from "../../interfaces";
import { todayRemindersActions } from "../../store/currentReminders/slice";
import { commonColors, commonStyles } from "../../theme";
import {EPage, ERemindersType} from "../../enums";
import { makeStyles } from "./styles";
import { useNavigation } from "@react-navigation/native";

const ACTIVATION_DISTANCE = 20;

const MainPage = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const user = useSelector((store) => store.user.user);
  const currentReminders = useSelector((store) => store.currentReminders);
  const appointment = currentReminders.appointment;
  const activity = currentReminders.activity;

  const classes = makeStyles();
  const itemRefs = useRef(new Map());

  const renderItem = useCallback(
    (
      params: RenderItemParams<IActivityItem | IAppointmentItem>,
      type: ERemindersType
    ) => {
      const onPressDelete = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        dispatch(
          todayRemindersActions.removeActivity({
            value: params.item.remindId,
            type,
          })
        );
      };

      return (
        <RemindBuilder
          {...params}
          itemRefs={itemRefs}
          onPressDelete={onPressDelete}
        />
      );
    },
    []
  );

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
        <DraggableFlatList
          contentContainerStyle={classes.commonPadding}
          keyExtractor={(item) => item.remindId}
          data={activity}
          renderItem={(params) => renderItem(params, ERemindersType.ACTIVITY)}
          activationDistance={20}
        />
        <View style={classes.commonPadding}>
          {activity.length === 0 && (
            <Text style={commonColors.darkGrey}>
              You don't have any activities today
            </Text>
          )}
        </View>
      </View>
      <View style={classes.addButtonsContainer}>
        <ContextButton
          title="Add a reminder"
          onPress={() => navigation.navigate(EPage.CURRENT_REMINDERS)}
          textStyles={{ fontFamily: "Inter-SemiBold" }}
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
        <Text style={[commonStyles.h3, classes.blockHeader, { marginTop: 10 }]}>
          Your today's appointments
        </Text>
      </View>
      <View style={classes.flatListContainer}>
        <DraggableFlatList
          contentContainerStyle={classes.commonPadding}
          keyExtractor={(item) => item.remindId}
          data={appointment}
          renderItem={(params) =>
            renderItem(params, ERemindersType.APPOINTMENT)
          }
          activationDistance={ACTIVATION_DISTANCE}
        />
        <View style={classes.commonPadding}>
          {appointment.length === 0 && (
            <Text style={commonColors.darkGrey}>
              You don't have any appointments today
            </Text>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MainPage;
