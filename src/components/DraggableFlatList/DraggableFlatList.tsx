import React, { useCallback, useRef } from "react";
import { LayoutAnimation } from "react-native";
import { useDispatch } from "react-redux";
import SwappableReminder from "../SwappableComponents/SwappableReminder";
import {
  remindersActions,
  RemindersStore,
} from "../../store/remindersStore/slice";
import DraggableFlatList, {
  RenderItemParams,
} from "react-native-draggable-flatlist";

interface IDraggableFlatListProps {
  data: RemindersStore[];
  styles: any;
}

const DraggableFlat = ({ data, styles }: IDraggableFlatListProps) => {
  const dispatch = useDispatch();
  const itemRefs = useRef(new Map());

  const renderItem = useCallback((params: RenderItemParams<RemindersStore>) => {
    const onPressDelete = () => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      dispatch(remindersActions.removeReminder(params.item.id));
    };

    return (
      <SwappableReminder
        {...params}
        itemRefs={itemRefs}
        onPressDelete={onPressDelete}
      />
    );
  }, []);

  return (
    <DraggableFlatList
      style={[styles]}
      keyExtractor={(item) => item?.id}
      data={data}
      renderItem={(params) => renderItem(params)}
      activationDistance={20}
    />
  );
};

export default DraggableFlat;
