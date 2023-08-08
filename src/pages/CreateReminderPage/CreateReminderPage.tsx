import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { useDispatch } from "react-redux";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { remindersActions } from "../../store/remindersStore";
import { RoutePropsProps } from "../../types";
import TextField from "../../components/TextField";
import Switch from "../../components/Switch";
import Select from "../../components/Select";
import Button from "../../components/Button";
import { commonStyles } from "../../theme";
import { useSelector } from "../../store";
import { getDate } from "../../helpers";
import { EPage } from "../../enums";
import { makeStyles } from "./styles";

const REPEAT_LIST = [
  { label: "Daily", value: "daily" },
  { label: "Every 2 days", value: "every2days" },
];

type TReminderFormType = {
  id: string;
  pet: {
    value: string;
    label: string;
  } | null;
  description: string;
  repeat?: {
    value: string;
    label: string;
  } | null;
  when: Date;
  endDate: Date | undefined;
  type: string;
};

const CreateReminderPage = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute<RoutePropsProps<EPage.CREATE_REMINDER>>();
  const pets = useSelector((state) => state.pets).map((item) => ({
    value: item.id,
    label: item.name,
  }));

  const { reminderType } = route.params;

  const classes = makeStyles();

  const [isStartDayTimeOpen, setIsStartDayTimeOpen] = useState(false);
  const [isEndDayTimeOpen, setIsEndDayTimeOpen] = useState(false);
  const [isEndDatePickerBlockOpen, setIsEndDatePickerBlockOpen] =
    useState(false);

  const {
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<TReminderFormType>({
    defaultValues: {
      id: uuidv4(),
      pet: pets && pets.length == 1 ? pets[0] : null,
      description: "",
      type: reminderType,
      repeat: null,
      when: new Date(),
      endDate: undefined,
    },
  });

  const currentDate = watch("when");
  const endMinimumDate = new Date(
    currentDate.setHours(currentDate.getHours() + 1)
  );

  const onToggleChange = () => {
    setIsEndDatePickerBlockOpen(!isEndDatePickerBlockOpen);
  };

  const onSubmit: SubmitHandler<TReminderFormType> = (data) => {
    const updatedData = {
      ...data,
      repeat: null ? { label: "Never", value: null } : data.repeat,
      endDate: (isEndDatePickerBlockOpen && data.endDate) || undefined,
    };

    dispatch(remindersActions.addReminder(updatedData));
    navigation.navigate(EPage.SUCCESS_PAGE);
  };

  return (
    <ScrollView
      style={[commonStyles.commonContainer, commonStyles.commonWrapper]}
    >
      <View style={classes.viewWrapper}>
        <View style={classes.header}>
          <Text style={commonStyles.h2}>Add {reminderType} reminder</Text>
        </View>
        <Controller
          name="pet"
          rules={{ required: true }}
          control={control}
          render={({ field: { onChange, value } }) => (
            <Select
              label="Pet *"
              placeholder={{ label: "Select your pet", value: null }}
              items={pets}
              onValueChange={onChange}
              value={value}
              error={!!errors.pet}
            />
          )}
        />
        <View>
          <Controller
            name="description"
            control={control}
            render={({ field: { onChange, value } }) => (
              <>
                <TextField
                  label="Remind me to..."
                  value={value}
                  onChange={onChange}
                  placeholder="Description"
                  multiline
                />
              </>
            )}
          />
          <Controller
            name="when"
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
          <Controller
            name="repeat"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Select
                label="Repeat"
                placeholder={{ label: "Never", value: null }}
                items={REPEAT_LIST}
                onValueChange={onChange}
                value={value}
              />
            )}
          />
          <View style={classes.switcherContainer}>
            <Text style={commonStyles.p2}>Open end date</Text>
            <Switch
              value={isEndDatePickerBlockOpen}
              toggleSwitch={onToggleChange}
            />
          </View>
          {isEndDatePickerBlockOpen && (
            <Controller
              name="endDate"
              control={control}
              render={({ field: { value, onChange } }) => (
                <View style={commonStyles.marginBottom20}>
                  {!isEndDayTimeOpen && (
                    <TextField
                      label="End date"
                      value={getDate(value, true, false)}
                      onPress={() => setIsEndDayTimeOpen(!isEndDayTimeOpen)}
                      editable={false}
                    />
                  )}
                  {isEndDayTimeOpen && (
                    <>
                      <RNDateTimePicker
                        locale="en"
                        value={value || endMinimumDate}
                        onChange={(event, date) => onChange(date as Date)}
                        mode="datetime"
                        display="spinner"
                        minimumDate={endMinimumDate}
                      />
                      <View style={classes.buttonContainer}>
                        <Button
                          title="Reset"
                          onPress={() => {
                            onChange(currentDate);
                          }}
                        />
                        <Button
                          title="Done"
                          onPress={() => setIsEndDayTimeOpen(false)}
                        />
                      </View>
                    </>
                  )}
                </View>
              )}
            />
          )}
          <View style={classes.addButtonBlock}>
            <Button
              title="Reset"
              onPress={() => {
                setIsEndDatePickerBlockOpen(false);
                reset();
              }}
            />
            <Button title="Add reminder" onPress={handleSubmit(onSubmit)} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default CreateReminderPage;
