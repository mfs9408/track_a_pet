import { ERemindersType } from "../enums";

export interface IActivityItem {
  petId: string;
  remindId: string;
  type: string;
  header: string;
  reminderType: ERemindersType;
  time: Date;
  petName: string;
  description?: string;
  nextRepeat?: Date | null;
}

export interface IAppointmentItem {
  petId: string;
  remindId: string;
  type: string;
  header: string;
  reminderType: ERemindersType;
  time?: Date;
  petName: string;
  description: string;
  doctorName?: string;
  address?: string;
  nextRepeat?: Date | null;
}
