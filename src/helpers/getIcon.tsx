import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { ICON_SIZE } from "../constList";
import { commonColors } from "../theme";

export const getIcon = (value: string) => {
  switch (value) {
    case "medical":
      return (
        <MaterialIcons
          name="medical-services"
          size={ICON_SIZE}
          color={commonColors.primary.color}
        />
      );
    case "pets":
      return (
        <MaterialIcons
          name="pets"
          size={ICON_SIZE}
          color={commonColors.primary.color}
        />
      );
    case "announcement":
      return (
        <MaterialIcons
          name="announcement"
          size={ICON_SIZE}
          color={commonColors.primary.color}
        />
      );
    default:
      return (
        <MaterialIcons
          name="add-task"
          size={ICON_SIZE}
          color={commonColors.primary.color}
        />
      );
  }
};
