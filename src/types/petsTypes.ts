import { EPetGenderType, EPetStatus } from "../enums";
import { Asset } from "expo-image-multiple-picker";

export interface IPetsTypes {
  id: string;
  userId: string;
  name: string;
  petType: {
    id: string;
    value: string;
  } | null;
  color: string;
  weight: string;
  age: string;
  breed?: string;
  spayed?: boolean;
  gender?: EPetGenderType;
  description?: string;
  image?: Asset[] | null;
  loseAddress?: {
    street: string;
  };
  petStatus: {
    value: string;
    id: EPetStatus;
  };
  loseDate?: string;
  remindIDs?: string[];
  birthDay?: string;
  insurance?: string;
  activityHistory?: any;
  diet?: string;
  medicalInformation?: {
    allergies?: string;
    medications?: string;
  };
  identification?: {
    microchip?: string;
    description?: string;
  };
  vaccination?: IDataItem[];
  veterinarianInfo?: {
    vet: string;
    clinic: string;
    address: string;
    phone: string;
  };
}

export interface IDataItem {
  value: string;
  label?: string;
  additionalRecords?: IAdditionalProperties[];
}

interface IAdditionalProperties {
  label: string;
  value: string;
}
