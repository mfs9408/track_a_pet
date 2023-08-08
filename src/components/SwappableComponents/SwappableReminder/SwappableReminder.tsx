import React from "react";
import { Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SwappableItemWrapper from "../SwappableItemWrapper";
import { InterfaceReminderStore } from "../../../store/remindersStore/slice";
import { getDate, getIcon } from "../../../helpers";
import { commonStyles } from "../../../theme";
import { makeStyles } from "./styles";
import { EPage } from "../../../enums";

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
  const navigation = useNavigation();

  return (
    <SwappableItemWrapper
      item={item}
      itemRefs={itemRefs}
      drag={drag}
      onPressDelete={onPressDelete}
    >
      <Pressable
        onPress={() =>
          navigation.navigate(EPage.CREATE_REMINDER, {
            reminderType: item.type,
            reminderId: item.id,
          })
        }
      >
        <View style={[commonStyles.boxShadow, classes.container]}>
          <View style={classes.itemContainer}>
            <View style={classes.icon}>{getIcon(item.type)}</View>
            <Text style={commonStyles.p1}>{item.pet?.value}</Text>
          </View>
          <View style={classes.itemContainer}>
            <Text>Start date: </Text>
            <Text style={commonStyles.p2}>
              {getDate(item.when, true, true)}
            </Text>
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
            <Text style={commonStyles.p2}>{item.repeat?.value}</Text>
          </View>
          {item.description && (
            <View style={[classes.itemContainer]}>
              <View style={classes.descriptionHeaderContainer}>
                <Text>Description: </Text>
              </View>
              <Text style={classes.descriptionText} numberOfLines={3}>
                {item.description}
              </Text>
            </View>
          )}
        </View>
      </Pressable>
    </SwappableItemWrapper>
  );
};

export default SwappableReminder;
