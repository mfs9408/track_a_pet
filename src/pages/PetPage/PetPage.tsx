import React, { useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Carousel } from "react-native-basic-carousel";
import { commonColors, commonStyles } from "../../theme";
import { RoutePropsProps, IPetsTypes } from "../../types";
import { petsActions } from "../../store/petsStore/slice";
import ModalWindow from "../../components/ModalWindow";
import Button from "../../components/Button";
import { EPage, EPetGenderType } from "../../enums";
import InfoBox from "../../components/InfoBox";
import Gender from "../../components/Gender";
import { isDataInObject } from "../../helpers";
import { useSelector } from "../../store";
import { makeStyles } from "./styles";

const PetPage = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const pets = useSelector((store) => store.pets);
  const route = useRoute<RoutePropsProps<EPage.PET>>();
  const navigation = useNavigation();
  const classes = makeStyles();

  const currentPet = pets?.find((pet) => route.params.petId === pet.id);

  const {
    id,
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
            <Text
              style={[commonStyles.p1, commonColors.primary]}
              onPress={() => navigation.navigate(EPage.ADD_PET, { id: id })}
            >
              Edit
            </Text>
          </TouchableOpacity>
        </View>
        <View style={classes.infoContainer}>
          <InfoBox title={petType?.value} description={"Pet"} />
          {color && <InfoBox title={color} description={"Color"} />}
          {weight && <InfoBox title={weight} description={"Weight"} />}
          {age && <InfoBox title={age} description={"Age"} />}
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
          {(identification?.microchip || identification?.description) && (
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
              {identification.microchip && (
                <View>
                  <View style={classes.subHeaderContainer}>
                    <Text style={[commonStyles.p2, commonColors.darkGrey]}>
                      &#8728; Microchip number: {identification.microchip}
                    </Text>
                  </View>
                </View>
              )}
              {identification.description && (
                <View>
                  <View style={classes.subHeaderContainer}>
                    <Text style={[commonStyles.p2, commonColors.darkGrey]}>
                      &#8728; Pet description: {identification.description}
                    </Text>
                  </View>
                </View>
              )}
            </View>
          )}
          {vaccination && vaccination?.length > 0 && (
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
          {isDataInObject(veterinarianInfo) && (
            <View style={classes.dataContainer}>
              <View style={classes.iconContainer}>
                <MaterialIcons
                  name="pets"
                  size={20}
                  color="black"
                  style={classes.icon}
                />
                <Text style={commonStyles.p1}>Veterinarian info</Text>
              </View>
              {veterinarianInfo?.vet && (
                <View>
                  <View style={classes.subHeaderContainer}>
                    <Text style={[commonStyles.p2, commonColors.darkGrey]}>
                      &#8728; Veterinarian: {veterinarianInfo.vet}
                    </Text>
                  </View>
                </View>
              )}
              {veterinarianInfo?.clinic && (
                <View>
                  <View style={classes.subHeaderContainer}>
                    <Text style={[commonStyles.p2, commonColors.darkGrey]}>
                      &#8728; Clinic: {veterinarianInfo.clinic}
                    </Text>
                  </View>
                </View>
              )}
              {veterinarianInfo?.address && (
                <View>
                  <View style={classes.subHeaderContainer}>
                    <Text style={[commonStyles.p2, commonColors.darkGrey]}>
                      &#8728; Address: {veterinarianInfo.address}
                    </Text>
                  </View>
                </View>
              )}
              {veterinarianInfo?.phone && (
                <View>
                  <View style={classes.subHeaderContainer}>
                    <Text style={[commonStyles.p2, commonColors.darkGrey]}>
                      &#8728; Address: {veterinarianInfo.phone}
                    </Text>
                  </View>
                </View>
              )}
            </View>
          )}
        </View>
        <ModalWindow
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          Component={
            <View style={{ flexDirection: "row" }}>
              <Button
                title="Delete pet"
                styles={{
                  backgroundColor: commonColors.error.color,
                  borderColor: commonColors.error.color,
                  flex: 1,
                }}
                onPress={() => setIsModalOpen(true)}
              />
            </View>
          }
        >
          <Text style={[commonStyles.p1, { marginBottom: 20 }]}>
            Delete your pet from your pet's list?
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <Button
              title="Cancel"
              onPress={() => setIsModalOpen(!isModalOpen)}
            />
            <Button
              title="Delete"
              styles={{
                backgroundColor: commonColors.error.color,
                borderColor: commonColors.error.color,
              }}
              onPress={() => {
                dispatch(petsActions.deletePet(id));
                navigation.navigate(EPage.MY_PETS);
              }}
            />
          </View>
        </ModalWindow>
      </View>
    </ScrollView>
  );
};

export default PetPage;
