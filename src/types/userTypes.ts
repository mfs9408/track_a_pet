import { EGenderType } from "../enums";

export interface IUserResponseInterface {
  tokens: ITokensInterface | null;
  user: IUserInterface | null;
}

export interface IUserInterface {
  email: string;
  id: string;
  role: [string];
  name: string;
  isActivated: boolean;
  avatar?: string;
  owning: string;
  pets: number[];
  gender: EGenderType;
}

interface ITokensInterface {
  refreshToken: string;
  accessToken: string;
}
