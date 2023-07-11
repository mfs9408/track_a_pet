import { ERemindersType } from "../enums";

export interface IActivityItem {
  petId: string;
  remindId: string;
  type: string;
  header: string;
  reminderType: ERemindersType;
  time: string;
  petName: string;
  description: string;
}

export interface IAppointmentItem {
  petId: string;
  remindId: string;
  type: string;
  header: string;
  reminderType: ERemindersType;
  time: string;
  petName: string;
  description: string;
  doctorName: string;
  address: string;
}
