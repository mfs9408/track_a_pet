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
    articleLink:
      "https://www.catanddogfirstaid.com/blog/10-red-flags-from-dogs-you-should-never-ignore/amp/",
    image: "https://placekitten.com/g/200/300",
    // image: require("../assets/images/articles/dog1.jpg"),
    header: "Dog health",
    keyWord: "dog",
    shortDescription: "Health Facts that Could Save Your Cat’s Life",
  },
  {
    articleLink:
      "https://www.hillspet.com/cat-care/play-exercise/five-fun-things-to-do-with-your-cat?lightboxfired=true",
    image: "https://placekitten.com/g/200/300",
    header: "Cat health",
    keyWord: "cat",
    shortDescription: "5 New Fun Things to Do With Your Cat",
  },
  {
    articleLink:
      "https://www.westfieldvetgroup.com/blog/2021/september/does-my-pet-need-vitamins-or-supplements-/",
    image: "https://placekitten.com/g/200/300",
    header: "Pet care",
    keyWord: "all",
    shortDescription: "Does my pet need vitamins or supplements?",
  },
];

const TERMS = [
  {
    section: "1. Acceptance of Terms",
    content:
      "By using Track a pet, you agree to comply with and be bound by these terms and conditions. If you do not agree to these terms, please do not use the application.",
  },
  {
    section: "2. Data Collection",
    content:
      "We collect and store the email addresses provided by users. Your data is treated with confidentiality and will not be shared with third parties without your consent.",
  },
  {
    section: "2.1 Geolocation Data",
    content:
      "When you use Track a pet, we may collect information about your location. This information is used to show your location or location your lost pet on a map. You can control the collection of geolocation data through your device settings.",
  },
  {
    section: "3. User Responsibilities",
    content:
      "Users are responsible for providing accurate and up-to-date information. You are also responsible for maintaining the confidentiality of your account and password.",
  },
  {
    section: "4. Intellectual Property",
    content:
      "The content and features of Track a pet are protected by copyright, trademark, and other laws. You may not reproduce, distribute, or create derivative works without our express written permission.",
  },
  {
    section: "5. Limitation of Liability",
    content:
      "We are not liable for any direct, indirect, incidental, consequential, or special damages arising out of or in any way connected with the use of Track a pet.",
  },
  {
    section: "6. Changes to Terms",
    content:
      "We reserve the right to modify these terms and conditions at any time. Users will be notified of any changes, and continued use of the application constitutes acceptance of the modified terms.",
  },
  {
    section: "7. Termination",
    content:
      "We reserve the right to terminate or suspend access to Track a pet at our discretion, without notice, for conduct that we believe violates these terms or is harmful to other users.",
  },
  {
    section: "8. Governing Law",
    content:
      "These terms and conditions are governed by and construed in accordance with the laws of the state of New York, without regard to its conflict of law principles.",
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
  TERMS,
};
