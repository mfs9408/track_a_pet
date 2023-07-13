import { EGenderType } from "../enums";
import MaleIcon from "../../assets/defaultAvatar/men.svg";
import FemaleIcon from "../../assets/defaultAvatar/female.svg";

export const getAvatar = (gender: EGenderType, props?: unknown) => {
  if (gender === EGenderType.MALE) {
    return <MaleIcon {...(props as object)} />;
  }

  return <FemaleIcon {...(props as object)} />;
};
