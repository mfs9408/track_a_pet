import React, { useCallback, useEffect, useRef } from "react";
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
import { commonColors, commonStyles } from "../../theme";
import { EPage, ERemindersType } from "../../enums";
import { makeStyles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { IActivity, remindersActions } from "../../store/remindersStore/slice";
import { commonDataActions } from "../../store/commonData";
import { getFilteredCurrentActivity } from "../../helpers/getFilteredCurrentActivity";

const MainPage = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const user = useSelector((store) => store.user.user);
  const activity = useSelector((store) => store.reminders.activity) || [];
  const time = useSelector((state) => state.commonData.time);
  const appointment = [];

  const currentActivity = getFilteredCurrentActivity(activity, time);

  useEffect(() => {
    const interval = setInterval(
      () => dispatch(commonDataActions.changeDate(Date.now())),
      20000
    );

    return () => {
      clearInterval(interval);
    };
  }, []);

  const classes = makeStyles();
  const itemRefs = useRef(new Map());

  const renderItem = useCallback(
    (params: RenderItemParams<IActivity>, type: ERemindersType) => {
      const onPressDelete = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        dispatch(
          remindersActions.removeCurrentReminder({
            id: params.item.id,
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
          style={{ maxHeight: 200 }}
          contentContainerStyle={[classes.commonPadding]}
          keyExtractor={(item) => item.id}
          data={currentActivity}
          renderItem={(params) => renderItem(params, ERemindersType.ACTIVITY)}
          activationDistance={20}
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
        {/*<DraggableFlatList*/}
        {/*  contentContainerStyle={classes.commonPadding}*/}
        {/*  keyExtractor={(item) => item.remindId}*/}
        {/*  data={appointment}*/}
        {/*  renderItem={(params) =>*/}
        {/*    renderItem(params, ERemindersType.APPOINTMENT)*/}
        {/*  }*/}
        {/*  activationDistance={ACTIVATION_DISTANCE}*/}
        {/*/>*/}
        <View style={classes.commonPadding}>
          {appointment.length === 0 && (
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
