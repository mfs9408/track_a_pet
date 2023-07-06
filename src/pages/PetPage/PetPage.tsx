import React from "react";
import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { Text, useTheme } from "react-native-paper";
import { makeStyles } from "./styles";
import { useSelector } from "../../store";
import { commonStyles } from "../../theme";
import { useRoute } from "@react-navigation/native";
import InfoBox from "../../components/InfoBox";
import Gender from "../../components/Gender";

interface Interface {
  title: string;
  icon: string;
  value: IDataValue[];
}

interface IDataValue {
  key: string;
  value?: string;
  additionalRecords?: IDataValue[];
}

const idArray: Interface[] = [
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
];

const PetPage = ({ navigation }) => {
  const { pets } = useSelector((store) => store);
  const route = useRoute();
  const theme = useTheme();
  const classes = makeStyles(theme.colors);

  const currentPet = pets.find((pet) => route.params.petId === pet.id);

  const {
    id,
    name,
    avatar,
    image,
    loseDate,
    species,
    breed,
    gender,
    owning,
    lost,
    spayed,
    description,
    birthDay,
    remindIDs,
    userId,
    loseAddress,
    color,
  } = currentPet;

  return (
    <ScrollView style={{ position: "relative", backgroundColor: "#fff" }}>
      <Ionicons
        name="chevron-back"
        size={35}
        color="rgba(129, 110, 199, 1)"
        style={{
          position: "absolute",
          top: 70,
          left: 25,
          zIndex: 100,
        }}
        onPress={() => navigation.goBack()}
      />
      <Image style={classes.image} source={{ uri: avatar as string }} />
      <View style={commonStyles.commonWrapper}>
        <View style={classes.headerContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={[commonStyles.h1, classes.header]}>{name}</Text>
            <Gender gender={gender} />
          </View>
          <TouchableOpacity>
            <Text style={[commonStyles.p1, { color: "#6b58b4" }]}>Edit</Text>
          </TouchableOpacity>
        </View>
        <View style={classes.infoContainer}>
          <InfoBox title={breed} description="Breed" />
          <InfoBox title={color} description="Color" />
          <InfoBox title={breed} description="Weight" />
          <InfoBox title={breed} description="Age" />
        </View>
        <View
          style={{
            flexDirection: "column",
            alignItems: "flex-start",
            marginTop: 35,
          }}
        >
          {idArray.map((item) => (
            <View style={{ marginBottom: 20 }}>
              <View style={{ flexDirection: "row", marginBottom: 10 }}>
                <MaterialIcons
                  name={item.icon}
                  size={20}
                  color="black"
                  style={classes.icon}
                />
                <Text style={commonStyles.p1}>{item.title}</Text>
              </View>
              {item.value.map(({ key, value, additionalRecords }) => (
                <View style={{ flexDirection: "column", marginBottom: 10 }}>
                  <View style={{ flexDirection: "row" }}>
                    <Text
                      style={[
                        commonStyles.p2,
                        { color: additionalRecords ? "#000" : "#5F5B5B" },
                      ]}
                    >
                      &#8728; {key}: {value}
                    </Text>
                  </View>
                  {additionalRecords?.map(({ key, value }) => (
                    <View
                      style={{
                        marginLeft: 15,
                        flexDirection: "row",
                      }}
                    >
                      <Text style={[commonStyles.p2, { color: "#5F5B5B" }]}>
                        &#8728; {key}: {value}
                      </Text>
                    </View>
                  ))}
                </View>
              ))}
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default PetPage;
