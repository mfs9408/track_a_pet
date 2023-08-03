import React from "react";
import { Text, View } from "react-native";
import SwappableItemWrapper from "../SwappableItemWrapper";
import { RemindersStore } from "../../../store/remindersStore/slice";
import { getDate, getIcon } from "../../../helpers";
import { commonStyles } from "../../../theme";
import { makeStyles } from "./styles";

interface ISwappableReminder {
  item: RemindersStore;
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
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 5,
          }}
        >
          <View style={{ marginRight: 10 }}>{getIcon(item.type)}</View>
          <Text style={commonStyles.p1}>{item.pet?.label}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 5,
          }}
        >
          <Text>Start date: </Text>
          <Text style={commonStyles.p2}>{getDate(item.startDate)}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 5,
          }}
        >
          <Text>End date: </Text>
          <Text style={commonStyles.p2}>{getDate(item.endDate)}</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text>Repeat: </Text>
          <Text style={commonStyles.p2}>{item.repeat?.label || "Never"}</Text>
        </View>
      </View>
    </SwappableItemWrapper>
  );
};

export default SwappableReminder;
