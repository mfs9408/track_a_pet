import React, { useEffect } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import TextField from "../../components/TextField";
import Chip from "../../components/Chip";
import Button from "../../components/Button";
import Select from "../../components/Select";
import { useSelector } from "../../store";
import { petsActions } from "../../store/petsStore/slice";
import { EPage, EPetGenderType, EPetStatus, EPetType } from "../../enums";
import { IAddForm, RoutePropsProps } from "../../types";
import { commonColors, commonStyles } from "../../theme";
import { makeStyles } from "./styles";

const PET_TYPE = [
  { id: EPetType.CAT, value: "Cat" },
  { id: EPetType.DOG, value: "Dog" },
];

const PET_STATUS = [
  {
    id: EPetStatus.LOST,
    value: "Lost",
  },
  {
    id: EPetStatus.FOUND,
    value: "Found",
  },
  {
    id: EPetStatus.OWNER,
    value: "Owner",
  },
];

const AddPet = () => {
  const classes = makeStyles();
  const navigation = useNavigation();
  const route = useRoute<RoutePropsProps<EPage.ADD_PET>>();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user.user);
  const petId = route.params?.id;
  const petsData = useSelector((state) =>
    state.pets.find((pet) => pet.id === petId)
  );

  const {
    control,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<IAddForm>({
    defaultValues: {
      id: petsData?.id || uuidv4(),
      userId: user?.id,
      name: petsData?.name || "",
      weight: petsData?.weight || "",
      color: petsData?.color || "",
      age: petsData?.age || "",
      description: petsData?.description || "",
      image: petsData?.image || [
        "https://placekitten.com/g/200/300",
        "https://placekitten.com/g/200/300",
      ],
      gender: petsData?.gender || EPetGenderType.UNKNOWN,
      petType: petsData?.petType || null,
      diet: petsData?.diet || "",
      insurance: petsData?.insurance || "",
      petStatus: petsData?.petStatus || {
        id: EPetStatus.OWNER,
        value: "Owner",
      },
      identification: petsData?.identification || {
        microchip: "",
        description: "",
      },
      medicalInformation: petsData?.medicalInformation || {
        allergies: "",
        medications: "",
      },
      vaccination: petsData?.vaccination || [],
      veterinarianInfo: petsData?.veterinarianInfo || {
        vet: "",
        clinic: "",
        address: "",
        phone: "",
      },
      birthDay: petsData?.birthDay || "01.01.2023",
      loseAddress: {
        street: petsData?.loseAddress?.street || "",
        zip: petsData?.loseAddress?.zip || "",
        city: petsData?.loseAddress?.city || "",
      },
    },
  });

  const isErrorExist = Object.keys(errors).length > 0;

  const onSubmit: SubmitHandler<IAddForm> = (data) => {
    if (petId) {
      dispatch(petsActions.editPet(data));
      navigation.navigate(EPage.PET, { petId: petId });
    } else {
      dispatch(petsActions.addPet(data));
      navigation.navigate(EPage.MY_PETS);
    }
  };

  const petStatus = watch("petStatus").id;
  const isPetLostOrFound = petStatus !== EPetStatus.OWNER;

  useEffect(() => {
    if (!isPetLostOrFound) {
      setValue("loseAddress", { street: "", zip: "", city: "" });
    }
  }, [isPetLostOrFound]);

  const onReset = () => {
    reset();
  };

  return (
    <SafeAreaView style={[commonStyles.commonContainer]}>
      <ScrollView style={[commonStyles.commonWrapper, { paddingBottom: 50 }]}>
        <Controller
          name="name"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <TextField
              label="Pet name *"
              value={value}
              placeholder="Pet's name"
              onChange={onChange}
              error={!!errors.name}
            />
          )}
        />
        <View style={classes.container}>
          <Controller
            name="gender"
            control={control}
            render={({ field: { onChange, value } }) => (
              <>
                <Text style={[commonStyles.p1, classes.text]}>Gender</Text>
                <View style={classes.genderChipContainer}>
                  <Chip
                    label="Female"
                    id={EPetGenderType.FEMALE}
                    value={value}
                    //@ts-ignore added task to fix
                    onChange={onChange}
                  />
                  <Chip
                    label="Male"
                    id={EPetGenderType.MALE}
                    value={value}
                    //@ts-ignore added task to fix
                    onChange={onChange}
                  />
                  <Chip
                    label="Unknown"
                    id={EPetGenderType.UNKNOWN}
                    value={value}
                    //@ts-ignore added task to fix
                    onChange={onChange}
                  />
                </View>
              </>
            )}
          />
        </View>
        <Controller
          name="petType"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <Select
              label="Pet *"
              placeholder={{ id: null, value: "Select pet type" }}
              items={PET_TYPE}
              value={value}
              onValueChange={onChange}
              error={!!errors.petType}
            />
          )}
        />
        <Controller
          name="color"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              label="Color"
              value={value}
              placeholder="Pet's color"
              onChange={onChange}
            />
          )}
        />
        <Controller
          name="weight"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              label="Weight"
              value={value}
              placeholder="Pet's weight (lb)"
              onChange={onChange}
            />
          )}
        />
        <Controller
          name="age"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              label="Age"
              value={value}
              placeholder="Pet's age"
              onChange={onChange}
            />
          )}
        />
        <Controller
          name="identification.microchip"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              label="Microchip number"
              value={value}
              placeholder="Microchip number"
              onChange={onChange}
              styles={classes.textField}
            />
          )}
        />
        <Controller
          name="identification.description"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              value={value}
              placeholder="Description"
              onChange={onChange}
            />
          )}
        />
        <Controller
          name="diet"
          control={control}
          render={({ field: { onChange, value } }) => (
            <>
              <TextField
                label={`Pet's diet`}
                value={value}
                placeholder="Pet's diet"
                onChange={onChange}
              />
            </>
          )}
        />
        <View style={{ marginBottom: 20 }}>
          <Text style={[commonStyles.p1, { marginBottom: 10 }]}>
            Veterinarian info
          </Text>
          <Controller
            name="veterinarianInfo.vet"
            control={control}
            render={({ field: { onChange, value } }) => (
              <>
                <TextField
                  value={value}
                  placeholder="Veterinarian"
                  onChange={onChange}
                  styles={{ marginBottom: 10 }}
                />
              </>
            )}
          />
          <Controller
            name="veterinarianInfo.clinic"
            control={control}
            render={({ field: { onChange, value } }) => (
              <>
                <TextField
                  value={value}
                  placeholder="Clinic"
                  onChange={onChange}
                  styles={{ marginBottom: 10 }}
                />
              </>
            )}
          />
          <Controller
            name="veterinarianInfo.address"
            control={control}
            render={({ field: { onChange, value } }) => (
              <>
                <TextField
                  value={value}
                  placeholder="Address"
                  onChange={onChange}
                  styles={{ marginBottom: 10 }}
                />
              </>
            )}
          />
          <Controller
            name="veterinarianInfo.phone"
            control={control}
            render={({ field: { onChange, value } }) => (
              <>
                <TextField
                  value={value}
                  placeholder="Phone"
                  onChange={onChange}
                />
              </>
            )}
          />
          <Controller
            name="petStatus"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <Select
                label="Pet status"
                placeholder={{ id: null, value: "Select pet status" }}
                items={PET_STATUS}
                value={value}
                onValueChange={onChange}
                error={!!errors.petStatus}
              />
            )}
          />

          {isPetLostOrFound && (
            <>
              <Controller
                name="loseAddress.street"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <>
                    <TextField
                      label="Address of lose"
                      value={value}
                      placeholder="Ex: Bedford ave"
                      onChange={onChange}
                    />
                  </>
                )}
              />
              <Controller
                name="loseAddress.zip"
                rules={{ required: true }}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <>
                    <TextField
                      value={value}
                      placeholder="Ex: 11235"
                      onChange={onChange}
                      error={!!errors.name}
                    />
                  </>
                )}
              />
              <Controller
                name="loseAddress.city"
                rules={{ required: true }}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <>
                    <TextField
                      value={value}
                      placeholder="Ex: Brooklyn"
                      onChange={onChange}
                      error={!!errors.name}
                    />
                  </>
                )}
              />
            </>
          )}
        </View>
        {isErrorExist && (
          <View style={classes.container}>
            <Text style={[commonStyles.p1, commonColors.error]}>
              Please fill in all mandatory fields
            </Text>
          </View>
        )}
        <View style={[classes.container, classes.buttonsContainer]}>
          <Button
            title="Reset all"
            onPress={onReset}
            textStyles={commonColors.whiteColor}
          />
          <Button
            title={petId ? "Edit pet" : "Add pet"}
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddPet;
