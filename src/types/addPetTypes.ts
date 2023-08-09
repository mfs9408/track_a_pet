import { EPetGenderType } from "../enums";
import { IDataItem } from "./petsTypes";

export interface IAddForm {
  id: string;
  userId: string;
  name: string;
  age: string;
  weight: string;
  color: string;
  lost: boolean;
  petType: {
    value: string;
    id: string;
  } | null;
  insurance: string;
  chip?: string;
  avatar?: string;
  gender?: EPetGenderType;
  description?: string;
  image?: string[] | null;
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
