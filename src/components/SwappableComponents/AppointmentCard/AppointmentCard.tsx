import React from "react";
import { TouchableOpacity, View, Text, LayoutAnimation } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { useSwipeableItemParams } from "react-native-swipeable-item";
import { commonColors, commonStyles } from "../../../theme";
import { IAppointmentItem } from "../../../interfaces";
import { makeStyles } from "./styles";
import SwappableItemWrapper from "../SwappableItemWrapper";
import { remindersActions } from "../../../store/remindersStore";
import { useDispatch } from "react-redux";

export type RowItemProps = {
  item: IAppointmentItem;
  drag: () => void;
  itemRefs: React.MutableRefObject<Map<any, any>>;
};

const classes = makeStyles();

const AppointmentCard = ({ item, itemRefs, drag }: RowItemProps) => {
  const dispatch = useDispatch();

  const onPressDelete = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    dispatch(remindersActions.removeAppointment({ id: item.id }));
  };

  return (
    <SwappableItemWrapper
      item={item}
      itemRefs={itemRefs}
      drag={drag}
      onPressDelete={onPressDelete}
    >
      <View style={[commonStyles.boxShadow, classes.container]}>
        <View style={classes.wrapper}>
          <View style={classes.iconWrapper}>
            <Text style={commonStyles.p1}>{item.header}</Text>
          </View>
          <Text style={[commonStyles.p3, commonColors.lightGrey]}>
            {item.time}
          </Text>
        </View>
        <View>
          <Text
            style={[
              commonStyles.p2,
              commonColors.darkGrey,
              classes.textDescription,
            ]}
            numberOfLines={5}
          >
            You have appointment with {item.petName} to Dr.{item.doctorName} at{" "}
          </Text>
          <Text>{item.time}</Text>
          <Text
            style={[commonStyles.p2, commonColors.darkGrey]}
            numberOfLines={5}
          >
            Address: {item.address}
          </Text>
        </View>
      </View>
    </SwappableItemWrapper>
  );
};

const UnderlayLeft = ({
  onPressDelete,
}: {
  drag: () => void;
  onPressDelete: () => void;
}) => {
  const { percentOpen } = useSwipeableItemParams<IAppointmentItem>();
  const animStyle = useAnimatedStyle(
    () => ({
      opacity: percentOpen.value,
    }),
    [percentOpen]
  );

  return (
    <Animated.View style={[classes.underlayLeft, animStyle]}>
      <TouchableOpacity
        onPress={onPressDelete}
        style={[commonStyles.boxShadow, classes.closeButtonContainer]}
      >
        <MaterialIcons name="close" size={24} color="rgba(129, 110, 199, 1)" />
      </TouchableOpacity>
    </Animated.View>
  );
};

export default AppointmentCard;
