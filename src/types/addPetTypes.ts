import { EPetGenderType, EPetStatus } from "../enums";
import { IDataItem } from "./petsTypes";
import { Asset } from "expo-image-multiple-picker";

export interface IAddForm {
  id: string;
  userId: string;
  name: string;
  age: string;
  weight: string;
  color: string;
  loseAddress?: {
    street: string;
    // zip: string;
    // city: string;
  };
  petType: {
    value: string;
    id: string;
  } | null;
  petStatus: {
    value: string;
    id: EPetStatus;
  };
  insurance: string;
  chip?: string;
  avatar?: string;
  gender?: EPetGenderType;
  description?: string;
  image?: Asset[] | null;
  diet?: string;
  birthDay?: string;
  identification?: {
    microchip?: string;
    description?: string;
  };
  medicalInformation?: {
    allergies?: string;
    medications?: string;
  };
  vaccination: IDataItem[];
  veterinarianInfo?: {
    vet: string;
    clinic: string;
    address: string;
    phone: string;
  };
}
