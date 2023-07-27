import { EPetGenderType } from "../enums";

export interface IPetsTypes {
  id: string;
  userId: string;
  name: string;
  petType: string | null;
  color: string;
  weight: string;
  age: string;
  breed?: string;
  avatar?: string;
  spayed?: boolean;
  gender?: EPetGenderType;
  description?: string;
  image?: string[] | null;
  lost: boolean;
  loseAddress?: string;
  loseDate?: string;
  remindIDs?: number[];
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
  veterinarianInfo?: IDataItem[];
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
