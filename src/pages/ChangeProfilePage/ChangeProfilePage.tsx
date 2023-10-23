import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useSelector } from "../../store";
import { EPage, EURL } from "../../enums";
import { commonColors, commonStyles } from "../../theme";
import { makeStyles } from "./styles";
import TextField from "../../components/TextField";
import Button from "../../components/Button";
import { userActions } from "../../store/user";
import { useNavigation } from "@react-navigation/native";
import { patch } from "../../Api";

type TSubmitProfile = {
  email: string;
  name: string;
};

const ChangeProfilePage = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const user = useSelector((state) => state.user.user);
  const classes = makeStyles();
  const token = useSelector((state) => state.user.tokens.accessToken);
  const [error, setError] = useState("");

  const { control, handleSubmit } = useForm<TSubmitProfile>({
    defaultValues: {
      email: user?.email,
      name: user?.name,
    },
  });

  const onSubmit: SubmitHandler<TSubmitProfile> = async (data) => {
    await patch(
      EURL.EDIT_USER,
      {
        id: user?.id,
        email: data.email,
        name: data.name,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    )
      .then((response) => {
        dispatch(userActions.changeUserData(response.data));
        navigation.navigate(EPage.PROFILE);
      })
      .catch((e) => setError(e));
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
          rules={{ required: true, minLength: 5, maxLength: 40 }}
          render={({ field: { onChange, value } }) => (
            <>
              <TextField
                label="Your email"
                value={value}
                onChange={onChange}
                placeholder="Email"
                styles={commonStyles.marginBottom20}
              />
            </>
          )}
        />
        <Controller
          name="name"
          control={control}
          rules={{ required: true, minLength: 5, maxLength: 40 }}
          render={({ field: { onChange, value } }) => (
            <>
              <TextField
                label="Your name"
                value={value}
                onChange={onChange}
                placeholder="Name"
                styles={commonStyles.marginBottom20}
              />
            </>
          )}
        />
        {error && (
          <Text style={[commonStyles.p2, commonColors.error]}>{error}</Text>
        )}
      </View>
      <View style={classes.addButtonBlock}>
        <Button title="Save" onPress={handleSubmit(onSubmit)} />
      </View>
    </ScrollView>
  );
};

export default ChangeProfilePage;
