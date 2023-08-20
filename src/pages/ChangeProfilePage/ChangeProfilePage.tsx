import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useSelector } from "../../store";
import { EGenderType, EPage, EPetGenderType } from "../../enums";
import { commonStyles } from "../../theme";
import { makeStyles } from "./styles";
import TextField from "../../components/TextField";
import Chip from "../../components/Chip";
import Button from "../../components/Button";
import { userActions } from "../../store/user";
import { useNavigation } from "@react-navigation/native";

type TSubmitProfile = {
  email: string;
  gender: EGenderType;
  name: string;
  owning: string;
};

const ChangeProfilePage = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const user = useSelector((state) => state.user.user);
  const classes = makeStyles();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TSubmitProfile>({
    defaultValues: {
      email: user?.email,
      gender: user?.gender,
      name: user?.name,
      owning: user?.owning,
    },
  });

  const onSubmit: SubmitHandler<TSubmitProfile> = (data) => {
    dispatch(userActions.changeUserData(data));
    navigation.navigate(EPage.PROFILE);
  };

  return (
    <ScrollView
      style={[
        commonStyles.commonContainer,
        commonStyles.commonWrapper,
        { height: "100%" },
      ]}
    >
      <View style={classes.header}>
        <Text style={commonStyles.h2}>Edit your profile</Text>
      </View>
      <View style={{ height: "140%" }}>
        <Controller
          name="email"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <>
              <TextField
                label="Your email"
                value={value}
                onChange={onChange}
                placeholder="Email"
              />
            </>
          )}
        />
        <Controller
          name="name"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <>
              <TextField
                label="Your name"
                value={value}
                onChange={onChange}
                placeholder="Name"
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
      </View>
      <View style={classes.addButtonBlock}>
        <Button title="Save" onPress={handleSubmit(onSubmit)} />
      </View>
    </ScrollView>
  );
};

export default ChangeProfilePage;
