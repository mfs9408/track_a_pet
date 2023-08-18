import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import SwipeableItem, {
  OpenDirection,
  useSwipeableItemParams,
} from "react-native-swipeable-item";
import { commonColors, commonStyles } from "../../../theme";
import { IActivityItem } from "../../../interfaces";
import { getDate, getIcon } from "../../../helpers";
import { makeStyles } from "./styles";
import { IActivity } from "../../../store/remindersStore/slice";

export type RowItemProps = {
  item: IActivity;
  drag: () => void;
  onPressDelete: () => void;
  itemRefs: React.MutableRefObject<Map<any, any>>;
};

const classes = makeStyles();

const ActivityCard = ({
  item,
  itemRefs,
  drag,
  onPressDelete,
}: RowItemProps) => {
  return (
    <SwipeableItem
      key={item.id}
      item={item}
      ref={(ref) => {
        if (ref && !itemRefs.current.get(item.id)) {
          itemRefs.current.set(item.id, ref);
        }
      }}
      onChange={({ openDirection }) => {
        if (openDirection !== OpenDirection.NONE) {
          [...itemRefs.current.entries()].forEach(([key, ref]) => {
            if (key !== item.id && ref) ref.close();
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
            <View style={classes.icon}>{getIcon(item.type)}</View>
            <Text style={commonStyles.p1}>{item.pet?.value}</Text>
          </View>
          <Text style={[commonStyles.p3, commonColors.lightGrey]}>
            {getDate(item.when, false, true)}
          </Text>
        </View>
        <View>
          <Text
            style={[commonStyles.p2, commonColors.darkGrey]}
            numberOfLines={5}
          >
            {item.description}
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
  const { percentOpen } = useSwipeableItemParams<IActivityItem>();
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

export default ActivityCard;
