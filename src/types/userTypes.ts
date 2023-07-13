import { EGenderType } from "../enums";

export interface IUserInterface {
  email: string;
  id: number;
  role: [string];
  name: string;
  isActivated: boolean;
  avatar?: string;
  owning: string;
  pets: number[];
  gender: EGenderType;
}

export interface IUserResponseInterface {
  tokens: ITokensInterface;
  user: IUserInterface;
}

interface ITokensInterface {
  refreshToken: string;
  accessToken: string;
}
