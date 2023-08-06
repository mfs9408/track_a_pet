import React from "react";
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
import { EPage, EPetGenderType, EPetType } from "../../enums";
import { petsActions } from "../../store/petsStore/slice";
import { commonColors, commonStyles } from "../../theme";
import { useSelector } from "../../store";
import { IAddForm, RoutePropsProps } from "../../types";
import { makeStyles } from "./styles";

const PET_TYPE = [
  { value: EPetType.CAT, label: "Cat" },
  { value: EPetType.DOG, label: "Dog" },
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
    formState: { errors },
  } = useForm<IAddForm>({
    defaultValues: {
      id: petsData?.id || uuidv4(),
      userId: user?.id,
      name: petsData?.name || "",
      weight: petsData?.weight || "",
      color: petsData?.color || "",
      description: petsData?.description || "",
      image: petsData?.image || [
        "https://placekitten.com/g/200/300",
        "https://placekitten.com/g/200/300",
      ],
      gender: petsData?.gender || EPetGenderType.UNKNOWN,
      petType: petsData?.petType || null,
      diet: petsData?.diet || "",
      insurance: petsData?.insurance || "",
      identification: petsData?.identification || {
        microchip: "",
        description: "",
      },
      medicalInformation: petsData?.medicalInformation || {
        allergies: "",
        medications: "",
      },
      vaccination: petsData?.vaccination || [],
      veterinarianInfo: petsData?.veterinarianInfo || [],
      lost: petsData?.lost || false,
      birthDay: petsData?.birthDay || "01.01.2023",
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

  const onReset = () => {
    reset();
  };

  return (
    <SafeAreaView style={[commonStyles.commonContainer]}>
      <ScrollView style={[commonStyles.commonWrapper]}>
        <Controller
          name="name"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <>
              <Text style={[commonStyles.p1, classes.text]}>Pet name *</Text>
              <TextField
                value={value}
                placeholder="Pet's name"
                onChange={onChange}
                error={!!errors.name}
              />
            </>
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
                    onChange={onChange}
                  />
                  <Chip
                    label="Male"
                    id={EPetGenderType.MALE}
                    value={value}
                    onChange={onChange}
                  />
                  <Chip
                    label="Unknown"
                    id={EPetGenderType.UNKNOWN}
                    value={value}
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
          name="chip"
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
          name="description"
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
