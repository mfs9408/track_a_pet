import React from "react";
import { useDispatch } from "react-redux";
import { View, Text, LayoutAnimation } from "react-native";
import { commonColors, commonStyles } from "../../../theme";
import { IAppointmentItem } from "../../../store/remindersStore/slice";
import SwappableItemWrapper from "../SwappableItemWrapper";
import { remindersActions } from "../../../store/remindersStore";
import { getDate } from "../../../helpers";
import { makeStyles } from "./styles";

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
            <Text style={commonStyles.p1}>{item.pet?.value}</Text>
          </View>
          <Text style={[commonStyles.p3, commonColors.lightGrey]}>
            {getDate(item.when, true, true)}
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
            You have appointment with {item.pet?.value} to
            {item.doctorName ? ` Dr.${item.doctorName}` : " a doctor"} at{" "}
            {getDate(item.when, false, true)}
          </Text>
          {item.address && (
            <Text
              style={[commonStyles.p2, commonColors.darkGrey]}
              numberOfLines={5}
            >
              Address: {item.address}
            </Text>
          )}
        </View>
      </View>
    </SwappableItemWrapper>
  );
};

export default AppointmentCard;
