import React, { useMemo, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Carousel } from "react-native-basic-carousel";
import Dots from "react-native-dots-pagination";
import { commonColors, commonStyles } from "../../theme";
import { IPetsTypes, RoutePropsProps } from "../../types";
import { petsActions } from "../../store/petsStore/slice";
import ModalWindow from "../../components/ModalWindow";
import Button from "../../components/Button";
import { EPage, EPetGenderType, EPetStatus } from "../../enums";
import InfoBox from "../../components/InfoBox";
import Gender from "../../components/Gender";
import { useSelector } from "../../store";
import { makeStyles } from "./styles";
import { DEFAULT_IMAGE_AVATAR } from "../../constList";

const PetPage = () => {
  const dispatch = useDispatch();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const route = useRoute<RoutePropsProps<EPage.PET>>();
  const navigation = useNavigation();

  const classes = makeStyles();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const pets = useSelector((store) => store.pets);
  const currentPet = pets?.find((pet) => route.params.petId === pet.id);

  const snapPoints = useMemo(() => ["60%", "85%"], []);

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
    petStatus,
    loseAddress,
  } = currentPet as IPetsTypes;

  return (
    <View style={[classes.scrollView, { flex: 1 }]}>
      <Ionicons
        name="chevron-back"
        size={35}
        color={commonColors.primary.color}
        style={classes.backIcon}
        onPress={() => navigation.goBack()}
      />
      <View style={{ position: "relative" }}>
        <Carousel
          data={
            image && image?.length > 0 ? image : [{ uri: DEFAULT_IMAGE_AVATAR }]
          }
          renderItem={({ item }) => (
            <Image style={classes.image} source={{ uri: item.uri }} />
          )}
          itemWidth={Dimensions.get("screen").width}
          // paginationColor={commonColors.primary.color}
          customPagination={({ activeIndex }) => {
            return <Dots length={image?.length || 0} active={activeIndex} />;
          }}
        />
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        containerHeight={500}
        animateOnMount={false}
      >
        <BottomSheetScrollView>
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
              <InfoBox title={color || "N/a"} description={"Color"} />
              <InfoBox title={weight || "N/a"} description={"Weight"} />
              <InfoBox title={age || "N/a"} description={"Age"} />
            </View>
            <View style={classes.dataWrapper}>
              <View style={classes.dataContainer}>
                <View style={classes.iconContainer}>
                  <MaterialIcons
                    name="info"
                    size={20}
                    color="black"
                    style={classes.icon}
                  />
                  <Text style={commonStyles.p1}>Pet status</Text>
                </View>
                <View style={classes.subDataContainer}>
                  <View style={classes.subHeaderContainer}>
                    <Text style={[commonStyles.p2, commonColors.darkGrey]}>
                      {petStatus.value}
                    </Text>
                  </View>
                </View>
              </View>
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
                      {diet || "N/a"}
                    </Text>
                  </View>
                </View>
              </View>
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
                <View>
                  <View style={classes.subHeaderContainer}>
                    <Text style={[commonStyles.p2, commonColors.darkGrey]}>
                      &#8728; Microchip number:{" "}
                      {identification?.microchip || "N/a"}
                    </Text>
                  </View>
                </View>
                <View>
                  <View style={classes.subHeaderContainer}>
                    <Text style={[commonStyles.p2, commonColors.darkGrey]}>
                      &#8728; Pet description:{" "}
                      {identification?.description || "N/a"}
                    </Text>
                  </View>
                </View>
              </View>
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
                          {additionalRecords?.map(
                            ({ label, value }, arrayKey) => (
                              <View
                                key={arrayKey}
                                style={classes.additionalRecordsContainer}
                              >
                                <Text
                                  style={[
                                    commonStyles.p2,
                                    { color: "#5F5B5B" },
                                  ]}
                                >
                                  &#8728; {label}: {value}
                                </Text>
                              </View>
                            )
                          )}
                        </View>
                      )
                  )}
                </View>
              )}
              <View style={classes.dataContainer}>
                <View style={classes.iconContainer}>
                  <MaterialIcons
                    name="info"
                    size={20}
                    color="black"
                    style={classes.icon}
                  />
                  <Text style={commonStyles.p1}>Veterinarian info</Text>
                </View>
                <View>
                  <View style={classes.subHeaderContainer}>
                    <Text style={[commonStyles.p2, commonColors.darkGrey]}>
                      &#8728; Veterinarian: {veterinarianInfo?.vet || "N/a"}
                    </Text>
                  </View>
                </View>
                <View>
                  <View style={classes.subHeaderContainer}>
                    <Text style={[commonStyles.p2, commonColors.darkGrey]}>
                      &#8728; Clinic: {veterinarianInfo?.clinic || "N/a"}
                    </Text>
                  </View>
                </View>
                <View>
                  <View style={classes.subHeaderContainer}>
                    <Text style={[commonStyles.p2, commonColors.darkGrey]}>
                      &#8728; Address: {veterinarianInfo?.address || "N/a"}
                    </Text>
                  </View>
                </View>
                <View>
                  <View style={classes.subHeaderContainer}>
                    <Text style={[commonStyles.p2, commonColors.darkGrey]}>
                      &#8728; Phone: {veterinarianInfo?.phone || "N/a"}
                    </Text>
                  </View>
                </View>
              </View>
              {petStatus?.id !== EPetStatus.OWNER && (
                <>
                  <View style={classes.iconContainer}>
                    <MaterialIcons
                      name="remove-red-eye"
                      size={20}
                      color={commonColors.error.color}
                      style={classes.icon}
                    />
                    <Text style={[commonStyles.p1, commonColors.error]}>
                      Pet is {petStatus?.id}
                    </Text>
                  </View>
                  <Text style={[commonStyles.p2, commonColors.darkGrey]}>
                    &#8728; Street: {loseAddress?.street}
                  </Text>
                </>
              )}
            </View>
            <View style={commonStyles.marginBottom10}>
              <View style={{ flexDirection: "row" }}>
                <Button
                  title="Edit pet status"
                  styles={{
                    backgroundColor: commonColors.secondary.color,
                    borderColor: commonColors.secondary.color,
                    flex: 1,
                  }}
                  onPress={() =>
                    navigation.navigate(EPage.PET_STATUS, { petId: id })
                  }
                />
              </View>
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
        </BottomSheetScrollView>
      </BottomSheet>
    </View>
  );
};

export default PetPage;
