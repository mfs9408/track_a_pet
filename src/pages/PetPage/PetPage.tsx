import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { makeStyles } from "./styles";
import { useSelector } from "../../store";
import { commonColors, commonStyles } from "../../theme";
import { useNavigation, useRoute } from "@react-navigation/native";
import InfoBox from "../../components/InfoBox";
import Gender from "../../components/Gender";
import { Carousel } from "react-native-basic-carousel";
import { IPetsTypes } from "../../types";
import { EPetGenderType } from "../../enums";

const PetPage = () => {
  const pets = useSelector((store) => store.pets);
  const route = useRoute();
  const navigation = useNavigation();
  const classes = makeStyles();

  const currentPet = pets.find((pet) => route.params.petId === pet.id);

  const {
    name,
    image,
    weight,
    gender,
    age,
    petType,
    color,
    diet,
    identification,
    vaccination,
    veterinarianInfo,
  } = currentPet as IPetsTypes;

  return (
    <ScrollView style={classes.scrollView}>
      <Ionicons
        name="chevron-back"
        size={35}
        color={commonColors.primary.color}
        style={classes.backIcon}
        onPress={() => navigation.goBack()}
      />
      <Carousel
        data={image || []}
        renderItem={({ item }) => (
          <Image style={classes.image} source={{ uri: item as string }} />
        )}
        itemWidth={Dimensions.get("screen").width}
        paginationColor={commonColors.primary.color}
        pagination
      />
      <View style={[commonStyles.commonWrapper, classes.commonContainer]}>
        <View style={classes.headerContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={[commonStyles.h1, classes.header]}>{name}</Text>
            <Gender gender={gender || EPetGenderType.UNKNOWN} />
          </View>
          <TouchableOpacity>
            <Text style={[commonStyles.p1, commonColors.primary]}>Edit</Text>
          </TouchableOpacity>
        </View>
        <View style={classes.infoContainer}>
          <InfoBox title={petType} description={"Pet"} />
          <InfoBox title={color} description={"Color"} />
          <InfoBox title={weight} description={"Weight"} />
          <InfoBox title={age} description={"Age"} />
        </View>
        <View style={classes.dataWrapper}>
          {diet && (
            <View style={classes.dataContainer}>
              <View style={classes.iconContainer}>
                <MaterialIcons
                  name="note"
                  size={20}
                  color="black"
                  style={classes.icon}
                />
                <Text style={commonStyles.p1}>Pet diet</Text>
              </View>
              <View style={classes.subDataContainer}>
                <View style={classes.subHeaderContainer}>
                  <Text style={[commonStyles.p2, commonColors.darkGrey]}>
                    {diet}
                  </Text>
                </View>
              </View>
            </View>
          )}
          {identification && (
            <View style={classes.dataContainer}>
              <View style={classes.iconContainer}>
                <MaterialIcons
                  name="pets"
                  size={20}
                  color="black"
                  style={classes.icon}
                />
                <Text style={commonStyles.p1}>Identification</Text>
              </View>
              {identification?.map(
                ({ label, value }, key) =>
                  value && (
                    <View key={key} style={classes.subDataContainer}>
                      <View style={classes.subHeaderContainer}>
                        <Text style={[commonStyles.p2, commonColors.darkGrey]}>
                          &#8728; {label}: {value}
                        </Text>
                      </View>
                    </View>
                  )
              )}
            </View>
          )}
          {vaccination && (
            <View style={classes.dataContainer}>
              <View style={classes.iconContainer}>
                <MaterialIcons
                  name="medical-services"
                  size={20}
                  color="black"
                  style={classes.icon}
                />
                <Text style={commonStyles.p1}>Medical records</Text>
              </View>
              {vaccination?.map(
                ({ label, value, additionalRecords }, key) =>
                  value && (
                    <View key={key} style={classes.subDataContainer}>
                      <Text
                        style={[
                          commonStyles.p2,
                          {
                            color: additionalRecords
                              ? commonColors.blackColor.color
                              : commonColors.darkGrey.color,
                          },
                        ]}
                      >
                        {value}
                      </Text>
                      {additionalRecords?.map(({ label, value }, arrayKey) => (
                        <View
                          key={arrayKey}
                          style={classes.additionalRecordsContainer}
                        >
                          <Text style={[commonStyles.p2, { color: "#5F5B5B" }]}>
                            &#8728; {label}: {value}
                          </Text>
                        </View>
                      ))}
                    </View>
                  )
              )}
            </View>
          )}
          {veterinarianInfo && (
            <View style={classes.dataContainer}>
              <View style={classes.iconContainer}>
                <MaterialIcons
                  name="account-box"
                  size={20}
                  color="black"
                  style={classes.icon}
                />
                <Text style={commonStyles.p1}>Veterinarian Information</Text>
              </View>
              {veterinarianInfo?.map(
                ({ label, value }, key) =>
                  value && (
                    <View key={key} style={classes.subDataContainer}>
                      <View style={classes.subHeaderContainer}>
                        <Text style={[commonStyles.p2, commonColors.darkGrey]}>
                          &#8728; {label}: {value}
                        </Text>
                      </View>
                    </View>
                  )
              )}
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default PetPage;
