import React from "react";
import { Text, View } from "react-native";
import SwappableItemWrapper from "../SwappableItemWrapper";
import { InterfaceReminderStore } from "../../../store/remindersStore/slice";
import { getDate, getIcon } from "../../../helpers";
import { commonStyles } from "../../../theme";
import { makeStyles } from "./styles";

interface ISwappableReminder {
  item: InterfaceReminderStore;
  drag: () => void;
  onPressDelete: () => void;
  itemRefs: React.MutableRefObject<Map<any, any>>;
}

const SwappableReminder = ({
  item,
  itemRefs,
  drag,
  onPressDelete,
}: ISwappableReminder) => {
  const classes = makeStyles();

  return (
    <SwappableItemWrapper
      item={item}
      itemRefs={itemRefs}
      drag={drag}
      onPressDelete={onPressDelete}
    >
      <View style={[commonStyles.boxShadow, classes.container]}>
        <View style={classes.itemContainer}>
          <View style={classes.icon}>{getIcon(item.type)}</View>
          <Text style={commonStyles.p1}>{item.pet.label}</Text>
        </View>
        <View style={classes.itemContainer}>
          <Text>Start date: </Text>
          <Text style={commonStyles.p2}>{getDate(item.when, true, true)}</Text>
        </View>
        {item?.endDate && (
          <View style={classes.itemContainer}>
            <Text>End date: </Text>
            <Text style={commonStyles.p2}>
              {getDate(item.endDate, true, true)}
            </Text>
          </View>
        )}
        <View style={classes.itemContainer}>
          <Text>Repeat: </Text>
          <Text style={commonStyles.p2}>{item.repeat?.label || "Never"}</Text>
        </View>
        {item.description && (
          <View style={classes.itemContainer}>
            <Text>Description: </Text>
            <Text numberOfLines={3}>{item.description}</Text>
          </View>
        )}
      </View>
    </SwappableItemWrapper>
  );
};

export default SwappableReminder;
