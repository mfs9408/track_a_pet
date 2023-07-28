import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import TextField from "../../components/TextField";
import Chip from "../../components/Chip";
import Button from "../../components/Button";
import Select from "../../components/Select";
import { EPage, EPetGenderType, EPetType } from "../../enums";
import { petsActions } from "../../store/petsStore/slice";
import { commonColors, commonStyles } from "../../theme";
import { useSelector } from "../../store";
import { IAddForm } from "../../types";
import { makeStyles } from "./styles";

const PET_TYPE = [
  { value: EPetType.CAT, label: "Cat" },
  { value: EPetType.DOG, label: "Dog" },
];

const AddPet = () => {
  const classes = makeStyles();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user.user);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IAddForm>({
    defaultValues: {
      id: "foo",
      userId: user?.id,
      name: "",
      age: "",
      weight: "",
      color: "",
      description: "",
      image: [
        "https://placekitten.com/g/200/300",
        "https://placekitten.com/g/200/300",
      ],
      avatar: "https://placekitten.com/g/200/300",
      gender: EPetGenderType.UNKNOWN,
      petType: null,
      diet: "",
      insurance: "",
      identification: {
        microchip: "",
        description: "",
      },
      medicalInformation: {
        allergies: "",
        medications: "",
      },
      vaccination: [],
      veterinarianInfo: [],
      lost: false,
      birthDay: "01.01.2023",
    },
  });

  const isErrorExist = Object.keys(errors).length > 0;

  const onSubmit: SubmitHandler<IAddForm> = (data) => {
    dispatch(petsActions.addPet(data));
    navigation.navigate(EPage.MY_PETS);
  };

  const onReset = () => {
    reset();
  };

  return (
    <SafeAreaView style={[commonStyles.commonContainer]}>
      <ScrollView style={[commonStyles.commonWrapper]}>
        <View style={classes.container}>
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
        </View>
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
        <View style={classes.container}>
          <Controller
            name="petType"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <>
                <Text style={[commonStyles.p1, classes.text]}>Pet *</Text>
                <Select
                  items={PET_TYPE}
                  value={value}
                  onValueChange={onChange}
                  error={!!errors.petType}
                />
              </>
            )}
          />
        </View>
        <View style={classes.container}>
          <Controller
            name="color"
            control={control}
            render={({ field: { onChange, value } }) => (
              <>
                <Text style={[commonStyles.p1, classes.text]}>Color</Text>
                <TextField
                  value={value}
                  placeholder="Pet's color"
                  onChange={onChange}
                />
              </>
            )}
          />
        </View>
        <View style={classes.container}>
          <Controller
            name="weight"
            control={control}
            render={({ field: { onChange, value } }) => (
              <>
                <Text style={[commonStyles.p1, classes.text]}>Weight</Text>
                <TextField
                  value={value}
                  placeholder="Pet's weight (lb)"
                  onChange={onChange}
                />
              </>
            )}
          />
        </View>
        <View style={classes.container}>
          <Controller
            name="age"
            control={control}
            render={({ field: { onChange, value } }) => (
              <>
                <Text style={[commonStyles.p1, classes.text]}>Age</Text>
                <TextField
                  value={value}
                  placeholder="Pet's age"
                  onChange={onChange}
                />
              </>
            )}
          />
        </View>
        <View style={classes.container}>
          <Controller
            name="chip"
            control={control}
            render={({ field: { onChange, value } }) => (
              <>
                <Text style={[commonStyles.p1, classes.text]}>
                  Microchip number
                </Text>
                <TextField
                  value={value}
                  placeholder="Microchip number"
                  onChange={onChange}
                  styles={classes.textField}
                />
              </>
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
        </View>
        <View style={classes.container}>
          <Controller
            name="diet"
            control={control}
            render={({ field: { onChange, value } }) => (
              <>
                <Text style={[commonStyles.p1, classes.text]}>Pet's diet</Text>
                <TextField
                  value={value}
                  placeholder="Pet's diet"
                  onChange={onChange}
                />
              </>
            )}
          />
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
          <Button title="Add pet" onPress={handleSubmit(onSubmit)} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddPet;
