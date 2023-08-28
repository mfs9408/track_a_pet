import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation, useRoute } from "@react-navigation/native";
import { RoutePropsProps } from "../../types";
import { EPage } from "../../enums";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "../../store";
import {
  IAppointmentItem,
  remindersActions,
} from "../../store/remindersStore/slice";
import { commonStyles } from "../../theme";
import { makeStyles } from "./styles";
import Select from "../../components/Select";
import TextField from "../../components/TextField";
import { getDate } from "../../helpers";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import Button from "../../components/Button";

const CreateAppointmentPage = () => {
  const classes = makeStyles();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute<RoutePropsProps<EPage.CREATE_APPOINTMENT>>();
  const appointmentId = route.params?.id;
  const petsData = useSelector((state) =>
    state.reminders.appointments.find((item) => item.id === appointmentId)
  );

  const pets = useSelector((state) => state.pets).map((item) => ({
    id: item.id,
    value: item.name,
  }));

  const currentDate = new Date();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IAppointmentItem>({
    defaultValues: {
      id: petsData?.id || uuidv4(),
      pet: petsData?.pet || (pets && pets.length == 1) ? pets[0] : null,
      type: petsData?.type || "",
      when: petsData?.when || new Date(),
      description: petsData?.description || "",
      doctorName: petsData?.doctorName || "",
      address: petsData?.address || "",
    },
  });

  const [isStartDayTimeOpen, setIsStartDayTimeOpen] = useState(false);

  const onSubmit: SubmitHandler<IAppointmentItem> = (data) => {
    const updatedData = {
      ...data,
      time: data.when,
    };

    if (appointmentId) {
      dispatch(remindersActions.editAppointment(updatedData));

      return navigation.navigate(EPage.APPOINTMENT_LIST);
    }

    dispatch(remindersActions.addAppointment(updatedData));
    navigation.navigate(EPage.APPOINTMENT_LIST);
  };

  return (
    <ScrollView
      style={[commonStyles.commonContainer, commonStyles.commonWrapper]}
    >
      <View style={classes.viewWrapper}>
        <View style={classes.header}>
          <Text style={commonStyles.h2}>
            {appointmentId ? "Edit" : "Make"} an appointment
          </Text>
        </View>
        <Controller
          name="pet"
          rules={{ required: true }}
          control={control}
          render={({ field: { onChange, value } }) => (
            <Select
              label="Pet *"
              placeholder={{ value: "Select your pet", id: null }}
              items={pets}
              onValueChange={onChange}
              value={value}
              error={!!errors.pet}
            />
          )}
        />
        <Controller
          name="description"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField value={value} onChange={onChange} label="Description" />
          )}
        />
        <Controller
          name="doctorName"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              value={value}
              onChange={onChange}
              label="Doctor's name"
            />
          )}
        />
        <Controller
          name="address"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField value={value} onChange={onChange} label="Address" />
          )}
        />
        <Controller
          name="when"
          rules={{ required: true }}
          control={control}
          render={({ field: { value, onChange } }) => (
            <View>
              {!isStartDayTimeOpen && (
                <TextField
                  label="When"
                  value={getDate(value, true, true)}
                  onPress={() => setIsStartDayTimeOpen(!isStartDayTimeOpen)}
                  editable={false}
                />
              )}
              {isStartDayTimeOpen && (
                <>
                  <RNDateTimePicker
                    locale="en"
                    value={value}
                    onChange={(event, date) => onChange(date as Date)}
                    mode="datetime"
                    display="spinner"
                  />
                  <View
                    style={[
                      commonStyles.marginBottom20,
                      classes.buttonContainer,
                    ]}
                  >
                    <Button
                      title="Reset"
                      onPress={() => {
                        onChange(currentDate);
                      }}
                    />
                    <Button
                      title="Done"
                      onPress={() => setIsStartDayTimeOpen(false)}
                    />
                  </View>
                </>
              )}
            </View>
          )}
        />
        <View style={classes.addButtonBlock}>
          <Button
            title="Reset"
            onPress={() => {
              setIsStartDayTimeOpen(false);
              reset();
            }}
          />
          <Button
            title={`${appointmentId ? "Edit" : "Make"} appointment`}
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default CreateAppointmentPage;
