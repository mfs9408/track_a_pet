import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPetsTypes } from "../../types";

const initialState: IPetsTypes[] | null = [
  {
    id: 1,
    userId: 2,
    name: "Tefa",
    avatar: "https://placekitten.com/g/200/300",
    owning: "owning",
    gender: "female",
    spayed: true,
    species: "street",
    breed: "foo",
    age: "11",
    color: "Orange",
    description: "lorem",
    image: [
      "https://placekitten.com/g/200/300",
      "https://placekitten.com/g/200/300",
      "https://placekitten.com/g/200/300",
    ],
    lost: true,
    weight: 1.23,
    loseAddress: "foo",
    loseDate: "new Date()",
    remindIDs: [2],
    birthDay: "new Date()",
    data: [
      {
        title: "Identification",
        icon: "pets",
        value: [
          {
            key: "Microchip number",
            value: "5adea72e-13a7-11ee-be56-0242ac120002",
          },
        ],
      },
      {
        title: "Medical records",
        icon: "medical-services",
        value: [
          {
            key: "Rabies Vaccination",
            additionalRecords: [
              {
                key: "Date",
                value: "May 15, 2023",
              },
              {
                key: "Vaccine Type",
                value: "Rabies Vaccine (1-year)",
              },
              {
                key: "Veterinarian",
                value: "Dr. Emily Johnson, ABC Veterinary Clinic",
              },
            ],
          },
          {
            key: "Distemper-Parvo Vaccination",
            additionalRecords: [
              {
                key: "Date",
                value: "February 28, 2023",
              },
              {
                key: "Vaccine Type",
                value: "DHPP Vaccine",
              },
              {
                key: "Veterinarian",
                value: "Dr. Sarah Anderson, XYZ Animal Hospital",
              },
            ],
          },
          {
            key: "Bordetella Vaccination",
            additionalRecords: [
              {
                key: "Date",
                value: "January 10, 2023",
              },
              {
                key: "Vaccine Type",
                value: "Bordetella Vaccine",
              },
              {
                key: "Veterinarian",
                value: "Dr. Michael Smith, Paws and Claws Veterinary Care",
              },
            ],
          },
        ],
      },
      {
        title: "Pet's diet",
        icon: "note",
        value: [
          {
            key: "Dietary Needs",
            value:
              "They have a preference for dry kibble and enjoy a mix of chicken and fish flavors. They require a balanced diet with a combination of protein, carbohydrates, and healthy fats. Additionally, they have a sensitive stomach and should avoid foods containing wheat or artificial additives. Feeding portions consist of two meals a day, with 1 cup of food in the morning and ¾ cup in the evening. It's important to provide fresh water at all times. Please consult with your veterinarian for specific dietary recommendations tailored to your pet's needs",
          },
        ],
      },
      {
        title: "Veterinarian Information",
        icon: "account-box",
        value: [
          {
            key: "Veterinarian",
            value: "Dr. Sarah Johnson",
          },
          {
            key: "Clinic",
            value: "ABC Veterinary Clinic",
          },
          {
            key: "Address",
            value: "123 Main Street, Cityville",
          },
          {
            key: "Phone number",
            value: " (555) 123-4567",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    userId: 3,
    name: "Fate",
    avatar: "https://placekitten.com/g/200/300",
    owning: "owning",
    gender: "female",
    color: "White",
    spayed: true,
    weight: 1.23,
    species: "street",
    breed: "foo",
    description: "lorem",
    image: ["foo"],
    age: "11",
    lost: false,
    loseAddress: "foo",
    loseDate: "new Date()",
    remindIDs: [2],
    birthDay: "new Date()",
  },
  {
    id: 3,
    userId: 1,
    name: "Afet",
    avatar: "https://placekitten.com/g/200/300",
    owning: "owning",
    gender: "male",
    spayed: true,
    species: "street",
    age: "11",
    color: "Black",
    breed: "foo",
    weight: 1.23,
    description: "lorem",
    image: ["foo"],
    lost: false,
    loseAddress: "foo",
    loseDate: "new Date()",
    remindIDs: [2],
    birthDay: "new Date()",
  },
];

const petsSlice = createSlice({
  name: "pets",
  initialState,
  reducers: {
    getPetByPetId: (state, { payload }: PayloadAction<any>) => {},
  },
});

export const petsActions = petsSlice.actions;
export default petsSlice;
