import { EPetStatus, EPetType, ERepeatType } from "./enums";

const PET_TYPE = [
  { id: EPetType.CAT, value: "Cat" },
  { id: EPetType.DOG, value: "Dog" },
];

const PET_STATUS = [
  {
    id: EPetStatus.OWNER,
    value: "Owner",
  },
  {
    id: EPetStatus.LOST,
    value: "Lost",
  },
  {
    id: EPetStatus.FOUND,
    value: "Found",
  },
];

const PET_STATUS_FOR_SEARCHING = [
  {
    id: EPetStatus.LOST,
    value: "Lost pet",
  },
  {
    id: EPetStatus.FOUND,
    value: "Found pet",
  },
];

const DEFAULT_IMAGE_AVATAR = "https://placekitten.com/g/200/300";

const ICON_SIZE = 24;

const FILTERS = [
  { id: "all", value: "All" },
  { id: "cat", value: "Cat", icon: "cat" },
  { id: "dog", value: "Dog", icon: "dog" },
];

const REPEAT_LIST = [
  { value: "Never", id: ERepeatType.NEVER },
  { value: "Daily", id: ERepeatType.DAILY },
  { value: "Every 2 days", id: ERepeatType.EVERY_2_DAYS },
];

const ACTIVATION_DISTANCE = 20;

const ARTICLES = [
  {
    articleLink: "https://www.google.ru",
    image: "https://placekitten.com/g/200/300",
    header: "Dog health",
    keyWord: "dog",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum et eum\n" +
      "            ex incidunt ipsa quas quasi qui ratione temporibus voluptatum? Amet\n" +
      "            dolore illo ipsa quas quod rerum totam. Est, voluptatibus.",
  },
  {
    articleLink: "foo",
    image: "https://placekitten.com/g/200/300",
    header: "Cat health",
    keyWord: "cat",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum et eum\n" +
      "            ex incidunt ipsa quas quasi qui ratione temporibus voluptatum? Amet\n" +
      "            dolore illo ipsa quas quod rerum totam. Est, voluptatibus.",
  },
  {
    articleLink: "foo",
    image: "https://placekitten.com/g/200/300",
    header: "Rabbit health",
    keyWord: "rabbit",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum et eum\n" +
      "            ex incidunt ipsa quas quasi qui ratione temporibus voluptatum? Amet\n" +
      "            dolore illo ipsa quas quod rerum totam. Est, voluptatibus.",
  },
];

export {
  DEFAULT_IMAGE_AVATAR,
  FILTERS,
  ICON_SIZE,
  ACTIVATION_DISTANCE,
  REPEAT_LIST,
  ARTICLES,
  PET_TYPE,
  PET_STATUS,
  PET_STATUS_FOR_SEARCHING,
};
