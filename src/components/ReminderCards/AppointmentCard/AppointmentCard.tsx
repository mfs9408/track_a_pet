import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import SwipeableItem, {
  OpenDirection,
  useSwipeableItemParams,
} from "react-native-swipeable-item";
import { commonColors, commonStyles } from "../../../theme";
import { IAppointmentItem } from "../../../interfaces";
import { makeStyles } from "./styles";

export type RowItemProps = {
  item: IAppointmentItem;
  drag: () => void;
  onPressDelete: () => void;
  itemRefs: React.MutableRefObject<Map<any, any>>;
};

const classes = makeStyles();

const AppointmentCard = ({
  item,
  itemRefs,
  drag,
  onPressDelete,
}: RowItemProps) => {
  return (
    <SwipeableItem
      key={item.remindId}
      item={item}
      ref={(ref) => {
        if (ref && !itemRefs.current.get(item.remindId)) {
          itemRefs.current.set(item.remindId, ref);
        }
      }}
      onChange={({ openDirection }) => {
        if (openDirection !== OpenDirection.NONE) {
          [...itemRefs.current.entries()].forEach(([key, ref]) => {
            if (key !== item.remindId && ref) ref.close();
            setTimeout(() => ref.close(), 5000);
          });
        }
      }}
      renderUnderlayLeft={() => (
        <UnderlayLeft drag={drag} onPressDelete={onPressDelete} />
      )}
      snapPointsLeft={[85]}
    >
      <View style={[commonStyles.boxShadow, classes.container]}>
        <View style={classes.wrapper}>
          <View style={classes.iconWrapper}>
            <Text style={commonStyles.p1}>{item.header}</Text>
          </View>
          <Text style={commonColors.lightGrey}>{item.time}</Text>
        </View>
        <View>
          <Text
            style={[commonColors.darkGrey, classes.textDescription]}
            numberOfLines={5}
          >
            You have appointment with {item.petName} to Dr.{item.doctorName} at{" "}
            {item.time}
          </Text>
          <Text style={commonColors.darkGrey} numberOfLines={5}>
            Address: {item.address}
          </Text>
        </View>
      </View>
    </SwipeableItem>
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
