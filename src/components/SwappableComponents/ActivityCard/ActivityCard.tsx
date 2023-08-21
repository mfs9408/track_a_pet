import React from "react";
import { View, Text, LayoutAnimation } from "react-native";
import { commonColors, commonStyles } from "../../../theme";
import { getDate, getIcon } from "../../../helpers";
import { makeStyles } from "./styles";
import {
  IActivity,
  remindersActions,
} from "../../../store/remindersStore/slice";
import SwappableItemWrapper from "../SwappableItemWrapper";
import { useDispatch } from "react-redux";

export type RowItemProps = {
  item: IActivity;
  drag: () => void;
  itemRefs: React.MutableRefObject<Map<any, any>>;
};

const classes = makeStyles();

const ActivityCard = ({ item, itemRefs, drag }: RowItemProps) => {
  const dispatch = useDispatch();

  const onPressDelete = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    dispatch(remindersActions.removeCurrentReminder({ id: item.id }));
  };

  return (
    <SwappableItemWrapper
      item={item}
      itemRefs={itemRefs}
      drag={drag}
      onPressDelete={onPressDelete}
      buttonStyle={classes.closeButtonContainer}
      buttonColor={commonColors.primary.color}
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
    </SwappableItemWrapper>
  );
};

export default ActivityCard;
