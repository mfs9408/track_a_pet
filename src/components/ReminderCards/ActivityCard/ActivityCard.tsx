import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import SwipeableItem, {
  OpenDirection,
  useSwipeableItemParams,
} from "react-native-swipeable-item";
import { getIcon } from "../../helpers";
import { IActivityItem } from "../../../interfaces";
import { commonColors, commonStyles } from "../../../theme";
import { makeStyles } from "./styles";

export type RowItemProps = {
  item: IActivityItem;
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
            {item.type && (
              <View style={classes.icon}>
                <MaterialIcons
                  name={getIcon(item.type)}
                  size={24}
                  color={commonColors.primary.color}
                />
              </View>
            )}
            <Text style={commonStyles.p1}>{item.header}</Text>
          </View>
          <Text style={commonColors.lightGrey}>{item.time}</Text>
        </View>
        <View>
          <Text style={commonColors.darkGrey} numberOfLines={5}>
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
