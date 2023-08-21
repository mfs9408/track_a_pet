import React, { useRef } from "react";
import { ViewStyle } from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";
import ReminderBuilder from "../SwappableComponents";
import { ERemindersType } from "../../enums";
import { TReminderBuilder } from "../SwappableComponents/ReminderBuilder";

interface IDraggableFlatListProps {
  data: TReminderBuilder[];
  style?: ViewStyle | ViewStyle[];
  contentContainerStyle?: any;
  type: ERemindersType;
}

const DraggableFlat = ({
  data,
  type,
  style,
  contentContainerStyle,
}: IDraggableFlatListProps) => {
  const itemRefs = useRef(new Map());

  return (
    <DraggableFlatList
      style={[style]}
      contentContainerStyle={contentContainerStyle}
      keyExtractor={(item) => item?.id}
      data={data}
      renderItem={(params) =>
        ReminderBuilder(params, params.item, itemRefs, type)
      }
      activationDistance={20}
    />
  );
};

export default DraggableFlat;
