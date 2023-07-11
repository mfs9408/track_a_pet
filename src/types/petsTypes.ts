interface IData {
  title: string;
  icon: string;
  value: ISubDataValue[];
}

interface ISubDataValue {
  key: string;
  value?: string;
  additionalRecords?: ISubDataValue[];
}

export interface IPetsTypes {
  id: number;
  userId: number;
  age: string;
  weight: number;
  name: string;
  color: string;
  avatar: string;
  owning: string;
  gender: string;
  spayed: boolean;
  species: string;
  breed: string;
  description: string;
  image: string[] | null;
  lost: boolean;
  loseAddress?: string;
  loseDate?: string;
  remindIDs?: number[];
  birthDay: string;
  data?: IData[];
}
