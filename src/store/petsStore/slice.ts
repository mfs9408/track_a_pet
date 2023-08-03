import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPetsTypes } from "../../types";

const initialState: IPetsTypes[] | null = [];

const petsSlice = createSlice({
  name: "pets",
  initialState,
  reducers: {
    addPet: (state, { payload }: PayloadAction<IPetsTypes>) => {},
  },
});

export const petsActions = petsSlice.actions;
export default petsSlice;

// {
//     id: 1,
//     userId: 2,
//     name: "Tefa",
//     avatar: "https://placekitten.com/g/200/300",
//     owning: "owning",
//     gender: "female",
//     spayed: true,
//     species: "street",
//     breed: "foo",
//     age: "11",
//     color: "Orange",
//     description: "lorem",
//     image: [
//       "https://placekitten.com/g/200/300",
//       "https://placekitten.com/g/200/300",
//       "https://placekitten.com/g/200/300",
//     ],
//     lost: true,
//     weight: "1.23",
//     loseAddress: "foo",
//     loseDate: "new Date()",
//     remindIDs: [2],
//     birthDay: "new Date()",
//     diet: "ff",
//     identification: [
//       {
//         label: "Microchip number",
//         value: "5adea72e-13a7-11ee-be56-0242ac120002",
//       },
//     ],
//     medicalRecords: [
//       {
//         value: "Rabies Vaccination",
//         additionalRecords: [
//           {
//             label: "Date",
//             value: "May 15, 2023",
//           },
//           {
//             label: "Vaccine Type",
//             value: "Rabies Vaccine (1-year)",
//           },
//           {
//             label: "Veterinarian",
//             value: "Dr. Emily Johnson, ABC Veterinary Clinic",
//           },
//         ],
//       },
//       {
//         value: "Distemper-Parvo Vaccination",
//         additionalRecords: [
//           {
//             label: "Date",
//             value: "February 28, 2023",
//           },
//           {
//             label: "Vaccine Type",
//             value: "DHPP Vaccine",
//           },
//           {
//             label: "Veterinarian",
//             value: "Dr. Sarah Anderson, XYZ Animal Hospital",
//           },
//         ],
//       },
//       {
//         value: "Bordetella Vaccination",
//         additionalRecords: [
//           {
//             label: "Date",
//             value: "January 10, 2023",
//           },
//           {
//             label: "Vaccine Type",
//             value: "Bordetella Vaccine",
//           },
//           {
//             label: "Veterinarian",
//             value: "Dr. Michael Smith, Paws and Claws Veterinary Care",
//           },
//         ],
//       },
//     ],
//     veterinarianInfo: [
//       {
//         label: "Veterinarian",
//         value: "Dr. Sarah Johnson",
//       },
//       {
//         label: "Clinic",
//         value: "ABC Veterinary Clinic",
//       },
//       {
//         label: "Address",
//         value: "123 Main Street, Cityville",
//       },
//       {
//         label: "Phone number",
//         value: " (555) 123-4567",
//       },
//     ],
//   },
