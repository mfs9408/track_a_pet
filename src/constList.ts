import { ERepeatType } from "./enums";

const DEFAULT_IMAGE_AVATAR = "https://placekitten.com/g/200/300";

const ICON_SIZE = 24;

const FILTERS = [
  { id: 1, value: "Cat health" },
  { id: 2, value: "Dog health" },
];

const REPEAT_LIST = [
  { value: "Never", id: ERepeatType.NEVER },
  { value: "Daily", id: ERepeatType.DAILY },
  { value: "Every 2 days", id: ERepeatType.EVERY_2_DAYS },
];

const ACTIVATION_DISTANCE = 20;

export {
  DEFAULT_IMAGE_AVATAR,
  FILTERS,
  ICON_SIZE,
  ACTIVATION_DISTANCE,
  REPEAT_LIST,
};
