import React, { PropsWithChildren } from "react";
import { TouchableOpacity } from "react-native";
import SwappableItem, {
  OpenDirection,
  useSwipeableItemParams,
} from "react-native-swipeable-item";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { IActivityItem } from "../../../interfaces";
import { commonStyles } from "../../../theme";
import { makeStyles } from "./styles";
import { TReminderBuilder } from "../ReminderBuilder";

export type TSwappableItemWrapper = {
  item: TReminderBuilder;
  drag: () => void;
  onPressDelete: () => void;
  onPressEdit?: () => void;
  itemRefs: React.MutableRefObject<Map<any, any>>;
  buttonStyle?: any;
  buttonColor?: any;
  edit?: boolean;
} & PropsWithChildren;

const classes = makeStyles();

const SwappableItemWrapper = ({
  item,
  itemRefs,
  drag,
  onPressDelete,
  onPressEdit,
  children,
  buttonStyle,
  buttonColor,
  edit,
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
        <UnderlayLeft
          drag={drag}
          onPressDelete={onPressDelete}
          onPressEdit={onPressEdit}
          buttonStyle={buttonStyle}
          buttonColor={buttonColor}
          edit={edit}
        />
      )}
      snapPointsLeft={edit ? [150] : [80]}
    >
      {children}
    </SwappableItem>
  );
};

const UnderlayLeft = ({
  onPressDelete,
  buttonStyle,
  buttonColor,
  onPressEdit,
  edit,
}: {
  drag: () => void;
  onPressDelete: () => void;
  onPressEdit?: () => void;
  buttonStyle?: any;
  buttonColor?: any;
  edit?: boolean;
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
      {edit && (
        <TouchableOpacity
          onPress={onPressEdit}
          style={[
            commonStyles.boxShadow,
            classes.editButtonContainer,
            buttonStyle,
            buttonColor,
          ]}
        >
          <MaterialIcons name="edit" size={24} color={buttonColor || "#fff"} />
        </TouchableOpacity>
      )}
      <TouchableOpacity
        onPress={onPressDelete}
        style={[
          commonStyles.boxShadow,
          classes.closeButtonContainer,
          buttonStyle,
          buttonColor,
        ]}
      >
        <MaterialIcons name="close" size={24} color={buttonColor || "#fff"} />
      </TouchableOpacity>
    </Animated.View>
  );
};

export default SwappableItemWrapper;
