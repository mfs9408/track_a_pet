import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { useDispatch } from "react-redux";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import TextField from "../../components/TextField";
import Button from "../../components/Button";
import { commonStyles } from "../../theme";
import { makeStyles } from "./styles";
import { RouteProps } from "../../types/navigateTypes";
import { getDate } from "../../helpers";
import Select from "../../components/Select";
import Switch from "../../components/Switch";
import { EPage } from "../../enums";
import { remindersActions } from "../../store/remindersStore";
import { useSelector } from "../../store";

const repeat = [
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
  startDate: Date;
  endDate: Date | undefined;
  type: string;
};

const CreateReminderPage = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute<RouteProps>();
  const pets = useSelector((state) => state.pets).map((item) => ({
    value: item.id,
    label: item.name,
  }));

  const { reminderType } = route.params;

  const classes = makeStyles();

  const [isStartDayOpen, setIsStartDayOpen] = useState(false);
  const [isEndDayOpen, setIsEndDayOpen] = useState(false);
  const [isEndDate, setIsEndDate] = useState(false);

  const currentDate = new Date();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TReminderFormType>({
    defaultValues: {
      id: uuidv4(),
      pet: pets && pets.length == 1 ? pets[0] : null,
      description: "",
      type: reminderType,
      repeat: null,
      startDate: currentDate,
      endDate: undefined,
    },
  });

  const onToggleChange = () => {
    setIsEndDate(!isEndDate);
  };

  const onSubmit: SubmitHandler<TReminderFormType> = (data) => {
    dispatch(remindersActions.addReminder(data));
    navigation.navigate(EPage.SUCCESS_PAGE);
  };

  return (
    <ScrollView
      style={[commonStyles.commonContainer, commonStyles.commonWrapper]}
    >
      <View style={{ paddingBottom: 100 }}>
        <View style={classes.header}>
          <Text style={commonStyles.h2}>Add {reminderType} reminder</Text>
        </View>
        <Controller
          name="pet"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Select
              label="Pet"
              placeholder={{ label: "Select your pet", value: null }}
              items={pets}
              onValueChange={onChange}
              value={value}
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
                />
              </>
            )}
          />
          <Controller
            name="startDate"
            control={control}
            render={({ field: { value, onChange } }) => (
              <View>
                {!isStartDayOpen && (
                  <TextField
                    label="Start date"
                    value={getDate(value)}
                    onPress={() => setIsStartDayOpen(!isStartDayOpen)}
                    editable={false}
                  />
                )}
                {isStartDayOpen && (
                  <>
                    <RNDateTimePicker
                      locale="en"
                      value={value}
                      onChange={(event, date) => onChange(date as Date)}
                      mode="datetime"
                      display="spinner"
                    />
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                        marginBottom: 20,
                      }}
                    >
                      <Button
                        title="Reset"
                        onPress={() => {
                          onChange(currentDate);
                        }}
                      />
                      <Button
                        title="Done"
                        onPress={() => setIsStartDayOpen(false)}
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
                items={repeat}
                onValueChange={onChange}
                value={value}
              />
            )}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <Text style={commonStyles.p2}>Open end date</Text>
            <Switch value={isEndDate} toggleSwitch={onToggleChange} />
          </View>
          {isEndDate && (
            <Controller
              name="endDate"
              control={control}
              render={({ field: { value, onChange } }) => (
                <View style={{ marginBottom: 20 }}>
                  {!isEndDayOpen && (
                    <TextField
                      label="End date"
                      value={getDate(value)}
                      onPress={() => setIsEndDayOpen(!isEndDayOpen)}
                      editable={false}
                    />
                  )}
                  {isEndDayOpen && (
                    <>
                      <RNDateTimePicker
                        locale="en"
                        value={value || new Date()}
                        onChange={(event, date) => onChange(date as Date)}
                        mode="datetime"
                        display="spinner"
                      />
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-around",
                        }}
                      >
                        <Button
                          title="Reset"
                          onPress={() => {
                            onChange(currentDate);
                          }}
                        />
                        <Button
                          title="Done"
                          onPress={() => setIsEndDayOpen(false)}
                        />
                      </View>
                    </>
                  )}
                </View>
              )}
            />
          )}
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <Button
              title="Reset"
              onPress={() => {
                setIsEndDate(false);
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
