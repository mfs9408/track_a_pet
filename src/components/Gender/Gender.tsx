import React from "react";
import { Ionicons } from "@expo/vector-icons";

interface IGenderProps {
  gender: string;
}

const Gender = ({ gender }: IGenderProps) => {
  if (gender === "male") {
    return (
      <Ionicons name="male-outline" size={25} color="rgba(42, 167, 223, 1)" />
    );
  }

  return (
    <Ionicons name="female-outline" size={25} color="rgba(219, 0, 255, 1)" />
  );
};

export default Gender;
