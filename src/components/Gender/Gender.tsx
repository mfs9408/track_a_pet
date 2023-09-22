import React from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { EGenderType } from "../../enums";

interface IGenderProps {
  gender: string;
}

const Gender = ({ gender }: IGenderProps) => {
  switch (gender) {
    case EGenderType.MALE:
      return (
        <Ionicons name="male-outline" size={25} color="rgba(42, 167, 223, 1)" />
      );

    case EGenderType.FEMALE:
      return (
        <Ionicons
          name="female-outline"
          size={25}
          color="rgba(219, 0, 255, 1)"
        />
      );

    default:
      return (
        <AntDesign name="question" size={25} color="rgba(219, 0, 255, 1)" />
      );
  }
};

export default Gender;
