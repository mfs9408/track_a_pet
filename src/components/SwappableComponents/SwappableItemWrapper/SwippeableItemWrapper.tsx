import React, { PropsWithChildren } from "react";
import { TouchableOpacity } from "react-native";
import SwappableItem, {
  OpenDirection,
  useSwipeableItemParams,
} from "react-native-swipeable-item";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { IActivityItem } from "../../../interfaces";
import { RemindersStore } from "../../../store/remindersStore/slice";
import { makeStyles } from "./styles";
import { commonStyles } from "../../../theme";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export type TSwappableItemWrapper = {
  item: RemindersStore;
  drag: () => void;
  onPressDelete: () => void;
  itemRefs: React.MutableRefObject<Map<any, any>>;
} & PropsWithChildren;

const classes = makeStyles();

const SwappableItemWrapper = ({
  item,
  itemRefs,
  drag,
  onPressDelete,
  children,
}: TSwappableItemWrapper) => {
  return (
    <SwappableItem
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
      {children}
    </SwappableItem>
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
        <MaterialIcons name="close" size={24} color="#fff" />
      </TouchableOpacity>
    </Animated.View>
  );
};

export default SwappableItemWrapper;
