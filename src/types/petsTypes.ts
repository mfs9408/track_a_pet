export interface IPetsTypes {
  id: number;
  userId: number;
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
}
