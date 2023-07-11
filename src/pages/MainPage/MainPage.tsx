import React, { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { LayoutAnimation, SafeAreaView, Text, View } from "react-native";
import DraggableFlatList, {
  RenderItemParams,
} from "react-native-draggable-flatlist";
import User from "../../components/User";
import { IActivityItem, IAppointmentItem } from "../../interfaces";
import { commonStyles } from "../../theme";
import { useSelector } from "../../store";
import { makeStyles } from "./styles";
import RemindBuilder from "../../components/RemindBulder";
import { todayRemindersActions } from "../../store/currentReminders/slice";
import { ERemindersType } from "../../enums";

const MainPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store).user;
  const currentReminders = useSelector((store) => store).currentReminders;
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
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
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
        <User {...user.user} />
        <Text style={[commonStyles.h3, classes.blockHeader]}>
          Your today's activity
        </Text>
      </View>
      <View>
        <DraggableFlatList
          contentContainerStyle={classes.commonPadding}
          keyExtractor={(item) => item.remindId}
          data={activity}
          renderItem={(params) => renderItem(params, ERemindersType.ACTIVITY)}
          activationDistance={20}
        />
        <View style={classes.commonPadding}>
          {activity.length === 0 && (
            <Text style={{ color: "#5F5B5B" }}>
              You don't have any activities today
            </Text>
          )}
        </View>
      </View>
      <View style={classes.commonWrapper}>
        <Text style={[commonStyles.h3, classes.blockHeader, { marginTop: 10 }]}>
          Your today's appointments
        </Text>
      </View>
      <View>
        <DraggableFlatList
          contentContainerStyle={classes.commonPadding}
          keyExtractor={(item) => item.remindId}
          data={appointment}
          renderItem={(params) =>
            renderItem(params, ERemindersType.APPOINTMENT)
          }
          activationDistance={20}
        />
        <View style={classes.commonPadding}>
          {appointment.length === 0 && (
            <Text style={{ color: "#5F5B5B" }}>
              You don't have any appointments today
            </Text>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MainPage;
